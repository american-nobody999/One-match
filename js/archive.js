/*
Author: Leslie Brockman
Date: 10-21-2026
*/
/* American Nobody Archives: manifest index + validated monthly HTML fragments. */
"use strict";

const archiveManifestURL = new URL('../archives/manifest.json', document.currentScript.src);

document.addEventListener('DOMContentLoaded', async () => {
    const main = document.getElementById('archive-main');
    if (!main || !document.getElementById('archive-entry-dialog')) return;

    let seriesButtons = [...main.querySelectorAll('.archive-series-card')];
    let monthButtons = [];
    const monthGrid = main.querySelector('.archive-month-grid');
    let renderedSeries;
    const list = main.querySelector('.archive-entry-list');
    const status = document.getElementById('archive-phase-note');
    const dialog = document.getElementById('archive-entry-dialog');
    const closeButton = dialog.querySelector('.archive-dialog-close');
    const heading = document.getElementById('archive-entry-title');
    const dateLabel = document.getElementById('archive-entry-date');
    const sampleNote = document.getElementById('archive-entry-sample-note');
    const writing = document.getElementById('archive-entry-writing');
    const english = document.getElementById('archive-entry-en');
    const arabic = document.getElementById('archive-entry-ar');
    const manifestURL = archiveManifestURL;
    const knownSeries = new Set();
    
    const cache = new Map();
    const emptyMonths = new Set();
    const historyKey = 'americanNobodyArchive';
    let manifest;
    let route = { series: null, month: null, entry: null };
    let loadedKey = null;
    let records = [];
    let generation = 0;
    let opener = null;
    let scrollState = null;
    let ignoredCloseEvents = 0;

    function applyLanguage(root) {
        const isArabic = document.documentElement.lang === 'ar';
        root.querySelectorAll('.lang-en, .lang-ar').forEach(element => {
            element.classList.toggle('hidden', element.classList.contains('lang-ar') !== isArabic);
        });
    }

    function translated(en, ar) {
        const fragment = document.createDocumentFragment();
        for (const [language, text] of [['en', en], ['ar', ar]]) {
            const span = document.createElement('span');
            span.className = `lang-${language}`;
            span.lang = language;
            span.dir = language === 'ar' ? 'rtl' : 'ltr';
            span.textContent = text;
            fragment.append(span);
        }
        return fragment;
    }

    function message(en, ar) {
        status.replaceChildren(translated(en, ar));
        applyLanguage(status);
    }

    function emptyList(en, ar) {
        const item = document.createElement('li');
        item.className = 'archive-empty';
        item.append(translated(en, ar));
        list.replaceChildren(item);
        applyLanguage(list);
    }

    function markSelected(button, selected) {
        button.setAttribute('aria-pressed', String(selected));
        button.classList.toggle('is-active', selected);
        let badge = button.querySelector('.archive-selected-label');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'archive-selected-label';
            badge.append(translated('✓ Selected', '✓ محدد'));
            button.append(badge);
        }
        badge.hidden = !selected;
    }

    function available(series, month) {
        return Boolean(manifest?.series[series]?.months[month]) && !emptyMonths.has(`${series}/${month}`);
    }

    function renderMonths() {
        if (renderedSeries === route.series) return;
        renderedSeries = route.series;
        const fragment = document.createDocumentFragment();
        const months = Object.keys(manifest.series[route.series]?.months || {}).sort().reverse();
        for (const month of months) {
            const item = document.createElement('li');
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'archive-choice archive-month-card';
            button.dataset.archiveMonth = month;
            button.setAttribute('aria-controls', 'archive-entries');
            button.setAttribute('aria-describedby', 'archive-month-note');
            const date = new Date(`${month}-01T00:00:00Z`);
            const label = language => new Intl.DateTimeFormat(language, {
                month: 'long', year: 'numeric', timeZone: 'UTC'
            }).format(date);
            button.append(translated(label('en'), label('ar')));
            item.append(button);
            fragment.append(item);
        }
        monthGrid.replaceChildren(fragment);
        monthButtons = [...monthGrid.querySelectorAll('.archive-month-card')];
    }

    function renderSelections() {
        renderMonths();
        seriesButtons.forEach(button => markSelected(button, button.dataset.archiveSeries === route.series));
        monthButtons.forEach(button => {
            const month = button.dataset.archiveMonth;
            button.disabled = !available(route.series, month);
            markSelected(button, !button.disabled && month === route.month);
            let note = button.querySelector('.archive-availability');
            if (!note) {
                note = document.createElement('span');
                note.className = 'archive-availability archive-entry-note';
                button.append(note);
            }
            note.replaceChildren(button.disabled
                ? translated('No entries available', 'لا توجد إدخالات متاحة')
                : translated('Available', 'متاح'));
        });
        applyLanguage(main);
    }

    // Manifest paths are relative to its own directory, never to the reader page.
    // Reject traversal, encodings, query strings, origins and unexpected filenames.
    function validateManifest(value) {
        const object = item => item && typeof item === 'object' && !Array.isArray(item);
        const slug = /^[a-z][a-z0-9-]*$/;
        if (!object(value) || value.version !== 2 || !object(value.collections) || !object(value.series)) {
            throw new Error('Invalid archive index.');
        }
        const title = item => object(item) && ['en', 'ar'].every(lang => typeof item[lang] === 'string' && item[lang].trim());
        for (const [collection, data] of Object.entries(value.collections)) {
            if (!slug.test(collection) || !title(data)) throw new Error('Invalid collection index.');
        }
        const paths = new Set();
        for (const [series, data] of Object.entries(value.series)) {
            if (!slug.test(series) || !object(data) || !Object.hasOwn(value.collections, data.collection) ||
                !title(data.title) || !object(data.months) || typeof data.directory !== 'string') {
                throw new Error('Invalid series index.');
            }
            const segments = data.directory.split('/');
            if (segments[0] !== data.collection || !segments.every(part => slug.test(part))) {
                throw new Error('Invalid collection directory.');
            }
            for (const [month, file] of Object.entries(data.months)) {
                if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month) || typeof file !== 'string' ||
                    file !== `${data.directory}/${month}.html` || paths.has(file)) {
                    throw new Error('Invalid monthly path.');
                }
                const base = new URL('.', manifestURL);
                const resolved = new URL(file, base);
                if (resolved.origin !== base.origin || !resolved.pathname.startsWith(base.pathname)) {
                    throw new Error('Archive path outside archive directory.');
                }
                paths.add(file);
            }
        }
        return value;
    }

    function prepareSeries() {
        const collection = main.dataset.archiveCollection || 'ok-series';
        const grid = main.querySelector('.archive-series-grid');
        const fragment = document.createDocumentFragment();
        for (const [series, data] of Object.entries(manifest.series)) {
            if (data.collection !== collection) continue;
            knownSeries.add(series);
            const item = document.createElement('li');
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'archive-choice archive-series-card';
            button.dataset.archiveSeries = series;
            button.setAttribute('aria-controls', 'archive-months');
            button.setAttribute('aria-pressed', 'false');
            const label = translated(data.title.en, data.title.ar);
            if (collection === 'world-leaders') {
                for (const language of label.children) {
                    const parts = language.textContent.split(' — ');
                    if (parts.length !== 2) continue;
                    const country = document.createElement('span');
                    country.className = 'archive-leader-country';
                    country.textContent = parts[0];
                    const person = document.createElement('span');
                    person.className = 'archive-leader-person';
                    person.textContent = parts[1];
                    language.replaceChildren(country, person);
                }
            }
            button.append(label);
            item.append(button);
            fragment.append(item);
        }
        grid.replaceChildren(fragment);
        seriesButtons = [...grid.querySelectorAll('.archive-series-card')];
    }

    function validDate(value) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
        const date = new Date(`${value}T00:00:00Z`);
        return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
    }

    function parseMonth(source, series, month, url) {
        if (/<!doctype|<\/?(?:html|head|body)(?:\s|\/?>)/i.test(source)) throw new Error('Expected HTML fragments only.');
        const parsed = new DOMParser().parseFromString(source, 'text/html');
        const tags = new Set(['ARTICLE', 'H2', 'H3', 'H4', 'H5', 'H6', 'TIME', 'DIV', 'SPAN', 'P', 'UL', 'OL', 'LI', 'A', 'STRONG', 'EM', 'B', 'I', 'U', 'S', 'BLOCKQUOTE', 'BR', 'HR', 'CODE', 'PRE', 'DL', 'DT', 'DD', 'SUP', 'SUB', 'CITE', 'ABBR']);
        const attributes = new Set(['class', 'id', 'lang', 'dir', 'datetime', 'href', 'title', 'rel', 'target', 'start', 'type', 'value', 'data-entry-date', 'data-demo']);
        const ids = new Set();
        if (parsed.head.children.length) throw new Error('Unexpected document metadata.');
        for (const element of parsed.body.querySelectorAll('*')) {
            if (element.namespaceURI !== 'http://www.w3.org/1999/xhtml' || !tags.has(element.tagName)) {
                throw new Error('Unexpected active or unsupported content.');
            }
            for (const attribute of element.attributes) {
                if (!attributes.has(attribute.name) || attribute.name.startsWith('on')) {
                    throw new Error('Unexpected content attribute.');
                }
                if (['href', 'target', 'rel'].includes(attribute.name) && element.tagName !== 'A') {
                    throw new Error('Unexpected link attribute.');
                }
            }
            if (element.id) {
                if (ids.has(element.id)) throw new Error('Duplicate fragment ID.');
                ids.add(element.id);
            }
            if (element.hasAttribute('href')) {
                const href = element.getAttribute('href');
                const resolved = new URL(href, url);
                if (!['http:', 'https:', 'mailto:', 'tel:'].includes(resolved.protocol)) throw new Error('Unsafe link.');
                // Hash links remain local to the inserted writing. Other relative links
                // resolve against the monthly file, not the public archive page.
                if (!href.startsWith('#')) element.setAttribute('href', resolved.href);
            }
            if (element.hasAttribute('target')) {
                if (!['_blank', '_self'].includes(element.getAttribute('target'))) throw new Error('Unsupported link target.');
                if (element.getAttribute('target') === '_blank') element.setAttribute('rel', 'noopener noreferrer');
            }
        }
        if ([...parsed.body.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim())) {
            throw new Error('Unexpected text outside an entry.');
        }
        const entries = [...parsed.body.children].map(article => {
            const date = article.dataset.entryDate || '';
            if (article.tagName !== 'ARTICLE' || !article.classList.contains('archive-entry') || !validDate(date) || date.slice(0, 7) !== month) {
                throw new Error('Invalid dated entry.');
            }
            const prefix = `${series}-${date}`;
            if (article.id !== prefix && !new RegExp(`^${prefix}-[a-z0-9-]+$`).test(article.id)) throw new Error('Invalid stable entry ID.');
            if (article.hasAttribute('data-demo') && article.dataset.demo !== 'true') throw new Error('Invalid demonstration marker.');
            // Namespaced inner IDs avoid collisions between entries and the page.
            for (const element of article.querySelectorAll('[id]')) {
                if (!element.id.startsWith(`${article.id}-`)) throw new Error('Inner IDs must start with the entry ID.');
            }
            const title = article.querySelector(':scope > h3');
            const time = article.querySelector(':scope > time');
            const content = article.querySelector(':scope > .archive-entry-content');
            if (article.children.length !== 3 || !title || !time || !content || content.tagName !== 'DIV' || content.children.length !== 2 || time.dateTime !== date) throw new Error('Missing entry structure.');
            const getLanguage = (parent, language) => {
                const nodes = parent.querySelectorAll(`:scope > .lang-${language}[lang="${language}"]`);
                if (nodes.length !== 1 || !nodes[0].textContent.trim() || (language === 'ar' && nodes[0].dir !== 'rtl')) {
                    throw new Error('Missing bilingual entry content.');
                }
                return nodes[0];
            };
            const en = getLanguage(content, 'en');
            const ar = getLanguage(content, 'ar');
            if (en.tagName !== 'DIV' || ar.tagName !== 'DIV' || en.dir !== 'ltr') throw new Error('Invalid writing containers.');
            return {
                id: article.id, date, demo: article.dataset.demo === 'true',
                titles: { en: getLanguage(title, 'en').textContent.trim(), ar: getLanguage(title, 'ar').textContent.trim() },
                dates: { en: getLanguage(time, 'en').textContent.trim(), ar: getLanguage(time, 'ar').textContent.trim() },
                en, ar
            };
        });
        return entries.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
    }

    async function loadMonth(series, month) {
        const key = `${series}/${month}`;
        if (!cache.has(key)) {
            const promise = (async () => {
                const url = new URL(manifest.series[series].months[month], manifestURL);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Monthly file unavailable.');
                return parseMonth(await response.text(), series, month, url);
            })();
            cache.set(key, promise);
            // Failed loads are retryable; successful loads remain cached in memory.
            promise.catch(() => { if (cache.get(key) === promise) cache.delete(key); });
        }
        return cache.get(key);
    }

    function urlFor(selection) {
        const url = new URL(location.href);
        for (const name of ['series', 'month', 'entry']) {
            if (selection[name]) url.searchParams.set(name, selection[name]);
            else url.searchParams.delete(name);
        }
        return url;
    }

    function writeURL(selection, mode) {
        if (mode === 'none') return;
        const url = urlFor(selection);
        if (url.href === location.href) return;
        const parent = mode === 'push' && selection.entry && !new URL(location.href).searchParams.has('entry')
            ? location.href : null;
        history[mode === 'push' ? 'pushState' : 'replaceState'](
            { ...history.state, [historyKey]: { entryParent: parent } }, '', url
        );
    }

    function readURL() {
        const params = new URL(location.href).searchParams;
        const selection = { series: null, month: null, entry: null };
        const invalid = () => ({ selection, invalid: true });
        if (['series', 'month', 'entry'].some(name => params.getAll(name).length > 1)) return invalid();
        const series = params.get('series');
        const month = params.get('month');
        const entry = params.get('entry');
        if (!series) {
            if (month !== null || entry !== null || params.has('series')) return invalid();
            if (knownSeries.size === 1) selection.series = [...knownSeries][0];
            return { selection };
        }
        if (!knownSeries.has(series) || !manifest.series[series]) return invalid();
        selection.series = series;
        if (month === null) return entry !== null ? invalid() : { selection };
        if (!available(series, month)) return invalid();
        selection.month = month;
        if (entry !== null) {
            if (!new RegExp(`^${series}-${month}-[0-9]{2}(?:-[a-z0-9-]+)?$`).test(entry)) return invalid();
            selection.entry = entry;
        }
        return { selection };
    }

    function releaseModal() {
        if (scrollState) {
            document.body.style.overflow = scrollState.body;
            document.documentElement.style.overflow = scrollState.html;
            scrollState = null;
        }
        if (opener?.isConnected && !opener.disabled) opener.focus({ preventScroll: true });
        opener = null;
    }

    function closeSilently() {
        if (!dialog.open) return;
        ignoredCloseEvents += 1;
        dialog.close();
        releaseModal();
    }

    function renderEntries() {
        const fragment = document.createDocumentFragment();
        for (const entry of records) {
            const item = document.createElement('li');
            const button = document.createElement('button');
            button.type = 'button';
            button.id = `archive-button-${entry.id}`;
            button.className = 'archive-choice archive-entry-card';
            button.dataset.archiveEntry = entry.id;
            button.dataset.archiveSeries = route.series;
            button.dataset.archiveMonth = route.month;
            button.setAttribute('aria-haspopup', 'dialog');
            button.setAttribute('aria-controls', dialog.id);
            const time = document.createElement('time');
            time.dateTime = entry.date;
            time.append(translated(entry.dates.en, entry.dates.ar));
            const title = document.createElement('strong');
            title.append(translated(entry.titles.en, entry.titles.ar));
            button.append(time, title);
            if (entry.demo) {
                const note = document.createElement('span');
                note.className = 'archive-entry-note';
                note.append(translated('Test record · Not a historical publication', 'سجل تجريبي · ليس منشورًا تاريخيًا'));
                button.append(note);
            }
            button.addEventListener('click', () => applyRoute({ ...route, entry: entry.id }, 'push'));
            item.append(button);
            fragment.append(item);
        }
        list.replaceChildren(fragment);
        applyLanguage(list);
    }

    function openEntry(entry) {
        if (dialog.open && dialog.dataset.archiveEntry === entry.id) return;
        closeSilently();
        heading.replaceChildren(translated(entry.titles.en, entry.titles.ar));
        const time = document.createElement('time');
        time.dateTime = entry.date;
        time.append(translated(entry.dates.en, entry.dates.ar));
        dateLabel.replaceChildren(translated(entry.demo ? 'Sample date: ' : 'Publication date: ', entry.demo ? 'تاريخ تجريبي: ' : 'تاريخ النشر: '), time);
        english.replaceChildren(...[...entry.en.childNodes].map(node => node.cloneNode(true)));
        arabic.replaceChildren(...[...entry.ar.childNodes].map(node => node.cloneNode(true)));
        sampleNote.hidden = !entry.demo;
        dialog.setAttribute('aria-describedby', entry.demo ? 'archive-entry-date archive-entry-sample-note' : 'archive-entry-date');
        dialog.dataset.archiveEntry = entry.id;
        applyLanguage(dialog);
        opener = document.getElementById(`archive-button-${entry.id}`);
        dialog.showModal();
        scrollState = { body: document.body.style.overflow, html: document.documentElement.style.overflow };
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        writing.scrollTop = 0;
        closeButton.focus({ preventScroll: true });
    }

    async function applyRoute(selection, mode = 'none', invalid = false) {
        const ticket = ++generation;
        if (selection.entry !== route.entry || selection.month !== route.month || selection.series !== route.series) closeSilently();
        route = { ...selection };
        writeURL(route, mode);
        renderSelections();
        list.setAttribute('aria-busy', 'false');
        if (!route.series || !route.month) {
            loadedKey = null;
            records = [];
            emptyList('Choose a series and an available month.', 'اختر سلسلة وشهرًا متاحًا.');
            message(...(invalid
                ? ['This archive link is unavailable or malformed. Please choose a series and an available month.', 'رابط الأرشيف غير متاح أو غير صالح. يُرجى اختيار سلسلة وشهر متاح.']
                : route.series && !monthButtons.some(button => !button.disabled)
                    ? ['No archived writing is available in this collection yet.', 'لا توجد نصوص مؤرشفة متاحة في هذه المجموعة بعد.']
                    : route.series ? ['Choose an available month. Unavailable months have no entries yet.', 'اختر شهرًا متاحًا. لا توجد إدخالات للأشهر غير المتاحة بعد.']
                        : ['Choose a series to browse available months.', 'اختر سلسلة لتصفّح الأشهر المتاحة.']));
            return;
        }
        const key = `${route.series}/${route.month}`;
        try {
            if (loadedKey !== key) {
                loadedKey = null;
                records = [];
                emptyList('Loading entries…', 'جارٍ تحميل الإدخالات…');
                list.setAttribute('aria-busy', 'true');
                message('Loading the selected month…', 'جارٍ تحميل الشهر المختار…');
                const result = await loadMonth(route.series, route.month);
                if (ticket !== generation) return;
                records = result;
                loadedKey = key;
                if (!records.length) {
                    emptyMonths.add(key);
                    route.month = null;
                    route.entry = null;
                    writeURL(route, 'replace');
                    renderSelections();
                    emptyList('This monthly file contains no entries yet.', 'لا يحتوي ملف هذا الشهر على إدخالات بعد.');
                    message('This month has no entries yet. Choose another available month or series.', 'لا توجد إدخالات لهذا الشهر بعد. اختر شهرًا متاحًا أو سلسلة أخرى.');
                    return;
                }
                renderEntries();
            }
            const entry = records.find(item => item.id === route.entry);
            if (route.entry && !entry) {
                route.entry = null;
                writeURL(route, 'replace');
                invalid = true;
            }
            if (entry) openEntry(entry);
            message(...(invalid
                ? ['The requested entry is unavailable. Choose one of the entries below.', 'الإدخال المطلوب غير متاح. اختر أحد الإدخالات أدناه.']
                : [`${records.length} entries available, newest first. Demonstration records are labeled.`, `عدد الإدخالات المتاحة: ${records.length}، من الأحدث إلى الأقدم. السجلات التوضيحية مميّزة.`]));
        } catch (error) {
            if (ticket !== generation) return;
            closeSilently();
            route.entry = null;
            loadedKey = null;
            records = [];
            writeURL(route, 'replace');
            emptyList('Entries could not be loaded.', 'تعذّر تحميل الإدخالات.');
            message('The monthly file could not be loaded or validated. Select the month again to retry. Use Live Server or the published site.', 'تعذّر تحميل ملف الشهر أو التحقّق منه. اختر الشهر مجددًا للمحاولة. استخدم Live Server أو الموقع المنشور.');
        } finally {
            if (ticket === generation) list.setAttribute('aria-busy', 'false');
        }
    }

    function restoreURL() {
        const result = readURL();
        if (result.invalid) writeURL(result.selection, 'replace');
        return applyRoute(result.selection, 'none', result.invalid);
    }

    // Delegation also covers dynamically generated month buttons; bind once.
    main.addEventListener('click', event => {
        const series = event.target.closest('button[data-archive-series].archive-series-card');
        if (series && main.contains(series) && manifest && series.dataset.archiveSeries !== route.series) {
            applyRoute({ series: series.dataset.archiveSeries, month: null, entry: null }, 'push');
            return;
        }
        const month = event.target.closest('button[data-archive-month].archive-month-card');
        if (month && main.contains(month) && manifest && !month.disabled) {
            applyRoute({ series: route.series, month: month.dataset.archiveMonth, entry: null }, 'push');
        }
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
        if (ignoredCloseEvents) { ignoredCloseEvents -= 1; return; }
        releaseModal();
        route.entry = null;
        const parent = history.state?.[historyKey]?.entryParent;
        if (parent && parent === urlFor(route).href) history.back();
        else writeURL(route, 'replace');
    });
    window.addEventListener('popstate', () => { if (manifest) restoreURL(); });

    const syncLanguage = () => { applyLanguage(main); applyLanguage(dialog); };
    document.addEventListener('languagechange', syncLanguage);
    window.addEventListener('languagechange', syncLanguage);
    // The current shared script changes html.lang without dispatching an event.
    // Observe that signal locally; do not add another toggle or change global state.
    new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    try {
        const response = await fetch(manifestURL);
        if (!response.ok) throw new Error('Archive index unavailable.');
        manifest = validateManifest(await response.json());
        prepareSeries();
        await restoreURL();
    } catch (error) {
        manifest = null;
        emptyList('The archive index is unavailable.', 'فهرس الأرشيف غير متاح.');
        message('The archive index could not be loaded. Please reload using Live Server or the published site.', 'تعذّر تحميل فهرس الأرشيف. أعد تحميل الصفحة باستخدام Live Server أو الموقع المنشور.');
    }
});
