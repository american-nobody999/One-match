/*
Author: Leslie Brockman
Date: 10-21-2026
*/
/* Preserve original entry fragment links on static monthly compatibility pages. */
"use strict";
const destination = new URL(document.getElementById('archive-destination').href);
const entry = location.hash.slice(1);
const series = destination.searchParams.get('series');
if (new RegExp(`^${series}-2026-10-[0-9]{2}(?:-[a-z0-9-]+)?$`).test(entry)) {
    destination.searchParams.set('entry', entry);
}
location.replace(destination.href);
