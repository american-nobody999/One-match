
//Author: Leslie Brockman
//Date modified: 10/21/2026
"use strict";
(() => {
    const ids = ['rocks-stage', 'rocks-lane', 'rocks-hit-zone', 'rocks-slingshot', 'rocks-projectile', 'rocks-launch', 'rocks-restart', 'rocks-score', 'rocks-status', 'rocks-dialog', 'rocks-collect', 'rocks-profile-title', 'rocks-profile-portrait', 'rocks-profile-bio', 'rocks-profile-socials', 'rocks-profile-website'];
    const nodes = ids.map(id => document.getElementById(id));
    if (nodes.some(node => !node)) return;
    if (typeof document.getElementById('rocks-dialog').showModal !== 'function') return;
    const [stage, lane, zone, sling, rock, launch, restart, score, status, dialog, collect, title, profilePortrait, biography, socials, website] = nodes;
    if (stage.dataset.initialized) return;
    stage.dataset.initialized = 'true';
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mode = { checked: motion.matches };
    const profiles = [
        {
            id: 'jacob-berger',
            name: 'Jacob Berger',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/jacob_b.jpg',
            portraitAlt: 'Portrait of Jacob Berger',
            biography: "Jacob Berger is an American actor, content creator, and activist who has used his public platform to advocate for Palestinian rights. Drawing on his background in social work, he has participated in humanitarian efforts supporting displaced Palestinians in Egypt and the wider region. In July 2025, he joined the Freedom Flotilla Coalition's Handala mission, which sought to challenge the blockade of Gaza and draw international attention to the humanitarian crisis.",
            biographyAr: "جاكوب بيرغر ممثل وصانع محتوى وناشط أمريكي استخدم منصته العامة للدفاع عن حقوق الفلسطينيين. واستنادًا إلى خلفيته في العمل الاجتماعي، شارك في جهود إنسانية لدعم الفلسطينيين النازحين في مصر والمنطقة الأوسع. وفي يوليو 2025، انضم إلى مهمة «حنظلة» التابعة لتحالف أسطول الحرية، التي سعت إلى تحدي الحصار المفروض على غزة ولفت الانتباه الدولي إلى الأزمة الإنسانية.",
            socialLinks: [
                { platform: 'Instagram', url: 'https://www.instagram.com/jacobbergeractor/', icon: 'instagram.jpeg' },
                { platform: 'TikTok', url: 'https://www.tiktok.com/@jacobbergeractor', icon: 'tiktok.png' },
                { platform: 'YouTube', url: 'https://www.youtube.com/@jacobbergeractor', icon: 'youtube.png' }
            ],
            websiteUrl: 'https://www.jacobbergeractor.com/'
        },
        {
            id: 'sammy-obeid',
            name: 'Sammy Obeid',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/sammy.jpg',
            portraitAlt: 'Portrait of Sammy Obeid',
            biography: "Sammy Obeid is a Palestinian-American comedian, writer, and advocate who uses humor to address social justice, politics, and Palestinian rights. A former mathematics teacher, he has appeared on Conan, America's Got Talent, and Last Comic Standing. Beyond the stage, Sammy has supported humanitarian initiatives for families in Gaza and helped build connections between communities through comedy, advocacy, and the Pal Collective.",
            biographyAr: "سامي عبيد كوميدي وكاتب ومناصر فلسطيني أمريكي يستخدم الفكاهة لتناول قضايا العدالة الاجتماعية والسياسة وحقوق الفلسطينيين. وهو مدرس رياضيات سابق، وقد ظهر في برامج «كونان» و«أمريكا غوت تالنت» و«لاست كوميك ستاندينغ». وخارج المسرح، دعم سامي مبادرات إنسانية للعائلات في غزة، وساعد في بناء روابط بين المجتمعات من خلال الكوميديا والمناصرة ومبادرة «بال كوليكتيف».",
            socialLinks: [
                { platform: 'Facebook', url: 'https://www.facebook.com/sammykobeid', icon: 'facebook.jpeg' },
                { platform: 'Instagram', url: 'https://www.instagram.com/sammyobeid/', icon: 'instagram.jpeg' },
                { platform: 'X', url: 'https://x.com/SammyObeid', icon: 'x.jpg' }
            ],
            websiteUrl: 'https://www.sammyko.com/'
        },
        {
            id: 'guy-christensen',
            name: 'Guy Christensen',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/guy.jpg',
            portraitAlt: 'Portrait of Guy Christensen',
            biography: 'Guy Christensen is a Gen-Z American content creator and advocate for Palestinian rights. He began speaking publicly about Palestine after witnessing the devastation in Gaza, using his online platform to discuss current events, challenge political narratives, and encourage people to become more informed and engaged. Through his website, Your Favorite Guy, he shares his work and connects with his audience.',
            biographyAr: "غاي كريستنسن صانع محتوى أمريكي من جيل زد ومدافع عن حقوق الفلسطينيين. بدأ الحديث علنًا عن فلسطين بعد أن شهد الدمار في غزة، مستخدمًا منصته على الإنترنت لمناقشة الأحداث الجارية وتحدي السرديات السياسية وتشجيع الناس على زيادة معرفتهم ومشاركتهم. ومن خلال موقعه الإلكتروني «يور فيفوريت غاي»، يشارك أعماله ويتواصل مع جمهوره.",
            socialLinks: [
                { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586740166712', icon: 'facebook.jpeg' },
                { platform: 'TikTok', url: 'https://www.tiktok.com/@yourfavoriteguy', icon: 'tiktok.png' },
                { platform: 'YouTube', url: 'https://www.youtube.com/@yourfavoriteguy0', icon: 'youtube.png' },
                { platform: 'X', url: 'https://x.com/guychristensen', icon: 'x.jpg' },
                { platform: 'UpScrolled', url: 'https://upscrolled.com/@guy', icon: 'upscrolled.png' }
            ],
            websiteUrl: 'https://www.yourfavoriteguy.com/'
        },
        {
            id: 'hamzah-saadah',
            name: 'Hamzah Saadah',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/hamaz.jpg',
            portraitAlt: 'Portrait of Hamzah Saadah',
            biography: 'Hamzah Saadah is a Palestinian actor, activist, and digital content creator who uses his online presence to share Palestinian perspectives, discuss identity and culture, and engage audiences in conversations about Palestine. He also founded All Things Palestine, a merchandise brand, and promotes humanitarian fundraising initiatives supporting families in Gaza.',
            biographyAr: "حمزة سعادة ممثل وناشط وصانع محتوى رقمي فلسطيني يستخدم حضوره على الإنترنت لعرض وجهات نظر فلسطينية ومناقشة الهوية والثقافة وإشراك الجمهور في حوارات حول فلسطين. كما أسس «أول ثينغز بالستاين»، وهي علامة تجارية للمنتجات، ويروّج لمبادرات لجمع التبرعات الإنسانية لدعم العائلات في غزة.",
            socialLinks: [
                { platform: 'Facebook', url: 'https://www.facebook.com/Hamzah1948', icon: 'facebook.jpeg' },
                { platform: 'YouTube', url: 'https://www.youtube.com/@Hamzah1948', icon: 'youtube.png' }
            ],
            websiteUrl: 'https://hamzahpali.com/'
        },
        {
            id: 'abdul-eyad',
            name: 'Abdul Eyad',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/abdul.jpg',
            portraitAlt: 'Portrait of Abdul Eyad',
            biography: 'Abdul Eyad is a Palestinian digital content creator and political commentator who shares his perspectives on Palestine, international affairs, and current events. Through his social-media platforms, he discusses political developments, challenges public narratives, and encourages audiences to engage with issues affecting Palestinians and communities around the world.',
            biographyAr: "عبد إياد صانع محتوى رقمي ومعلق سياسي فلسطيني يشارك وجهات نظره حول فلسطين والشؤون الدولية والأحداث الجارية. ومن خلال منصاته على وسائل التواصل الاجتماعي، يناقش التطورات السياسية ويتحدى السرديات السائدة ويشجع الجمهور على التفاعل مع القضايا التي تؤثر في الفلسطينيين والمجتمعات حول العالم.",
            socialLinks: [
                { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61568464723256', icon: 'facebook.jpeg' },
                { platform: 'Instagram', url: 'https://www.instagram.com/abdul.eyad/', icon: 'instagram.jpeg' }
            ],
            websiteUrl: null
        },
        {
            id: 'bassem-youssef',
            name: 'Bassem Youssef',
            portraitUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/bassem.jpg',
            portraitAlt: 'Portrait of Bassem Youssef',
            biography: 'Bassem Youssef is an Egyptian-American comedian, political satirist, television host, and former cardiac surgeon. Internationally recognized for his groundbreaking satirical television program Al Bernameg, he has used comedy and public commentary to challenge political narratives and discuss human rights. Through interviews, performances, and social media, Bassem has brought attention to the humanitarian crisis in Gaza and amplified conversations about Palestinian rights.',
            biographyAr: "باسم يوسف كوميدي وساخر سياسي ومقدم برامج تلفزيونية مصري أمريكي، وجراح قلب سابق. وقد اكتسب شهرة عالمية بفضل برنامجه التلفزيوني الساخر الرائد «البرنامج»، واستخدم الكوميديا والتعليق على الشأن العام لتحدي السرديات السياسية ومناقشة حقوق الإنسان. ومن خلال المقابلات والعروض ووسائل التواصل الاجتماعي، لفت باسم الانتباه إلى الأزمة الإنسانية في غزة وعزز النقاشات حول حقوق الفلسطينيين.",
            socialLinks: [
                { platform: 'Facebook', url: 'https://www.facebook.com/bassemyousseftv', icon: 'facebook.jpeg' },
                { platform: 'Instagram', url: 'https://www.instagram.com/bassem/', icon: 'instagram.jpeg' },
                { platform: 'TikTok', url: 'https://www.tiktok.com/@bassem', icon: 'tiktok.png' },
                { platform: 'X', url: 'https://x.com/Byoussef', icon: 'x.jpg' },
                { platform: 'YouTube', url: 'https://www.youtube.com/channel/UCoZnEQMqVvv_DkF50fupMKw', icon: 'youtube.png' }
            ],
            websiteUrl: 'https://bassemyoussef.xyz/'
        }
    ];
    const targets = [];
    let frame = null, previous = null, phase = 'idle', loaded = false;
    let heldPointer = null, heldKey = null, current = null, shot = null, tippedAt = 0;
    let returnFocus = null, statusUntil = 0;
    const arabic = () => document.documentElement.lang === 'ar';
    const say = (en, ar) => { status.textContent = arabic() ? ar : en; };
    const profileName = target => arabic() && target.profile.nameAr ? target.profile.nameAr : target.profile.name;
    const active = () => targets.filter(target => target.state === 'active');
    function setState(target, state) {
        target.state = state;
        target.element.dataset.state = state;
    }
    function refreshLabels() {
        targets.forEach(target => { target.label.textContent = profileName(target); });
        lane.setAttribute('aria-label', arabic() ? 'أهداف كرنفالية تجريبية' : 'Placeholder carnival targets');
        if (current) renderProfile(current);
    }
    function validUrl(value) {
        if (typeof value !== 'string' || !value.trim()) return null;
        try {
            const url = new URL(value);
            return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
        } catch { return null; }
    }
    function renderPortrait(container, profile) {
        container.replaceChildren();
        const url = validUrl(profile.portraitUrl);
        if (url) {
            container.removeAttribute('aria-hidden');
            const image = document.createElement('img');
            image.src = url;
            image.alt = profile.portraitAlt || `Portrait of ${profile.name}`;
            container.append(image);
        } else {
            container.setAttribute('aria-hidden', 'true');
            container.textContent = '◇';
        }
    }
    function renderProfile(target) {
        const profile = target.profile;
        title.textContent = profileName(target);
        title.lang = arabic() && profile.nameAr ? 'ar' : 'en';
        renderPortrait(profilePortrait, profile);
        biography.textContent = arabic() && profile.biographyAr ? profile.biographyAr : profile.biography;
        biography.lang = arabic() && profile.biographyAr ? 'ar' : 'en';
        biography.dir = biography.lang === 'ar' ? 'rtl' : 'ltr';
        socials.replaceChildren();
        for (const social of profile.socialLinks) {
            const url = validUrl(social.url);
            if (!url) continue;
            const link = document.createElement('a');
            link.className = 'social-link';
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', `${profile.name} — ${social.platform}`);
            const icon = document.createElement('img');
            icon.src = `https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/${social.icon}`;
            icon.alt = '';
            link.append(icon);
            socials.append(link);
        }
        if (!socials.childElementCount) socials.textContent = arabic() ? 'وسائل التواصل: حقل تجريبي فقط — لا يوجد حساب مرتبط.' : 'Social media: placeholder only — no account linked.';
        const websiteUrl = validUrl(profile.websiteUrl);
        website.hidden = !websiteUrl;
        if (websiteUrl) website.href = websiteUrl;
        else website.removeAttribute('href');
    }
    for (let index = 0; index < profiles.length; index += 1) {
        const element = document.createElement('button');
        element.type = 'button';
        element.id = `rocks-target-${index + 1}`;
        element.className = 'rocks-target';
        const portrait = document.createElement('span');
        portrait.className = 'rocks-portrait';
        renderPortrait(portrait, profiles[index]);
        const label = document.createElement('span');
        label.className = 'rocks-target-name';
        const stand = document.createElement('span');
        stand.className = 'rocks-stand';
        stand.setAttribute('aria-hidden', 'true');
        element.append(portrait, label, stand);
        lane.append(element);
        const target = { profile: profiles[index], id: element.id, number: String(index + 1).padStart(2, '0'), state: 'active', x: index * 144, element, label, stand };
        targets.push(target);
        element.addEventListener('click', () => {
            if (mode.checked && phase === 'idle' && target.state === 'active') hit(target, performance.now());
        });
    }
    function paint() {
        targets.forEach(target => {
            target.element.style.transform = mode.checked ? '' : `translateX(${target.x}px)`;
            target.element.disabled = !mode.checked || phase !== 'idle' || target.state !== 'active';
        });
        launch.disabled = mode.checked || phase !== 'idle' || !active().length;
    }
    function clearHold() {
        loaded = false;
        heldPointer = null;
        heldKey = null;
        stage.classList.remove('is-loaded');
    }
    function schedule() {
        if (frame === null && !document.hidden && phase !== 'popup' && phase !== 'complete' && (!mode.checked || phase === 'tipping')) frame = requestAnimationFrame(tick);
    }
    function showProfile() {
        phase = 'popup';
        current.element.hidden = true;
        renderProfile(current);
        paint();
        dialog.showModal();
        collect.focus();
    }
    function hit(target, now) {
        if (target.state !== 'active' || (phase !== 'flying' && phase !== 'idle')) return;
        clearHold();
        current = target;
        returnFocus = mode.checked ? target.element : launch;
        setState(target, 'hit');
        phase = 'tipping';
        tippedAt = now;
        rock.hidden = true;
        shot = null;
        say('Stand hit! Meet this placeholder humanitarian.', 'أُصيبت القاعدة! تعرّف على هذه الشخصية التجريبية.');
        paint();
        if (motion.matches || mode.checked) showProfile();
        else schedule();
    }
    function moveParade(dt) {
        const lineup = active();
        lineup.forEach(target => { target.x -= dt * .075; });
        // Wrap only fully offscreen targets; the remaining lineup never resets.
        [...lineup].sort((a, b) => a.x - b.x).forEach(target => {
            if (target.x + target.element.offsetWidth < 0) {
                const tail = Math.max(lane.clientWidth, ...lineup.filter(other => other !== target).map(other => other.x + other.element.offsetWidth));
                target.x = tail + 32;
            }
        });
    }
    function overlaps(a, b) {
        return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
    }
    function tick(now) {
        frame = null;
        const dt = previous === null ? 0 : Math.min(now - previous, 50);
        previous = now;
        if (phase === 'idle' || phase === 'flying') moveParade(dt);
        paint();
        if (phase === 'flying') {
            shot.elapsed += dt;
            const progress = Math.min(shot.elapsed / 380, 1);
            const stageRect = stage.getBoundingClientRect();
            const slingRect = sling.getBoundingClientRect();
            const zoneRect = zone.getBoundingClientRect();
            const startX = slingRect.left + slingRect.width / 2 - stageRect.left;
            const startY = slingRect.top - stageRect.top + (shot.loaded ? 28 : 0);
            const endX = zoneRect.left + zoneRect.width / 2 - stageRect.left;
            const endY = zoneRect.top + zoneRect.height / 2 - stageRect.top;
            rock.style.transform = `translate(${startX + (endX - startX) * progress - 7}px, ${startY + (endY - startY) * progress - 7}px)`;
            if (progress === 1) {
                // Collision uses the visible stand and the actual red rectangle at arrival.
                const candidates = active().filter(target => overlaps(target.stand.getBoundingClientRect(), zoneRect));
                candidates.sort((a, b) => Math.abs(a.stand.getBoundingClientRect().left + a.stand.offsetWidth / 2 - (zoneRect.left + zoneRect.width / 2)) - Math.abs(b.stand.getBoundingClientRect().left + b.stand.offsetWidth / 2 - (zoneRect.left + zoneRect.width / 2)));
                if (candidates.length) hit(candidates[0], now);
                else {
                    phase = 'idle';
                    rock.hidden = true;
                    shot = null;
                    say('MISS — try again.', 'لم تُصب — حاول مجددًا.');
                    statusUntil = now + 1400;
                }
            }
        }
        if (phase === 'tipping' && now - tippedAt >= 580) showProfile();
        if (statusUntil && now >= statusUntil && phase === 'idle') { status.textContent = ''; statusUntil = 0; }
        paint();
        schedule();
    }
    function load() {
        if (phase !== 'idle' || mode.checked || loaded || !active().length) return false;
        loaded = true;
        stage.classList.add('is-loaded');
        say('LOADED — release to launch.', 'جاهز — أفلت للإطلاق.');
        return true;
    }
    function fire() {
        if (!loaded || phase !== 'idle') return;
        clearHold();
        phase = 'flying';
        shot = { elapsed: 0, loaded: true };
        rock.hidden = false;
        statusUntil = 0;
        say('RELEASED', 'أُطلق الحجر');
        paint();
        schedule();
    }
    launch.addEventListener('pointerdown', event => {
        if (!event.isPrimary || event.button !== 0 || heldKey !== null || heldPointer !== null) return;
        event.preventDefault();
        if (load()) { heldPointer = event.pointerId; launch.setPointerCapture(event.pointerId); }
    });
    launch.addEventListener('pointerup', event => { if (heldPointer === event.pointerId) { event.preventDefault(); fire(); } });
    launch.addEventListener('pointercancel', clearHold);
    launch.addEventListener('lostpointercapture', () => { if (loaded) clearHold(); });
    launch.addEventListener('keydown', event => {
        if (event.key !== ' ' && event.key !== 'Enter') return;
        event.preventDefault();
        if (!event.repeat && heldPointer === null && heldKey === null && load()) heldKey = event.key;
    });
    launch.addEventListener('keyup', event => { if (event.key === heldKey) { event.preventDefault(); fire(); } });
    launch.addEventListener('blur', clearHold);
    collect.addEventListener('click', () => {
        if (phase !== 'popup' || !current || current.state !== 'hit') return;
        setState(current, 'collected');
        score.textContent = `${targets.filter(target => target.state === 'collected').length} / 6`;
        const focus = returnFocus;
        current = null;
        dialog.close();
        const finished = !active().length;
        phase = finished ? 'complete' : 'idle';
        say(finished ? 'Complete! You collected all six points.' : 'Point collected. Keep going!', finished ? 'اكتملت اللعبة! جمعت النقاط الست.' : 'جمعت نقطة. واصل اللعب!');
        paint();
        // Collected targets are hidden: restore to the next available game control.
        if (finished) restart.focus();
        else if (mode.checked) (active().find(target => target.element === focus) || active()[0]).element.focus();
        else launch.focus();
        previous = null;
        schedule();
    });
    dialog.addEventListener('cancel', event => event.preventDefault());
    dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const focusable = [...dialog.querySelectorAll('a[href], button:not(:disabled)')].filter(element => !element.hidden);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    function reset() {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previous = null;
        phase = 'idle';
        clearHold();
        current = null;
        shot = null;
        statusUntil = 0;
        rock.hidden = true;
        if (dialog.open) dialog.close();
        targets.forEach((target, index) => {
            setState(target, 'active');
            target.x = index * 144;
            target.element.hidden = false;
        });
        score.textContent = '0 / 6';
        stage.classList.toggle('is-stationary', mode.checked);
        refreshLabels();
        paint();
        say(mode.checked ? 'Select any stand to open its placeholder profile.' : 'Hold and release LAUNCH when a stand approaches the red zone.', mode.checked ? 'اختر أي قاعدة لفتح ملفها التجريبي.' : 'اضغط ثم أفلت عندما تقترب قاعدة من المنطقة الحمراء.');
        schedule();
    }
    restart.addEventListener('click', reset);
    motion.addEventListener('change', () => {
        mode.checked = motion.matches;
        clearHold();
        shot = null;
        rock.hidden = true;
        if (phase === 'flying') phase = 'idle';
        stage.classList.toggle('is-stationary', mode.checked);
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previous = null;
        paint();
        say(mode.checked ? 'Select any active stand.' : 'Hold and release to launch.', mode.checked ? 'اختر أي قاعدة نشطة.' : 'اضغط ثم أفلت للإطلاق.');
        schedule();
    });
    document.querySelectorAll('.lang-toggle').forEach(button => button.addEventListener('click', refreshLabels));
    document.addEventListener('visibilitychange', () => {
        clearHold();
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previous = null;
        schedule();
    });
    window.addEventListener('blur', clearHold);
    mode.checked = motion.matches;
    reset();
})();
