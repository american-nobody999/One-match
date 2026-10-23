"use strict";

// Reuse the existing content-independent card controller. Module loading runs it
// once, preventing duplicate listeners. Native buttons support click, touch,
// Enter, and Space; the controller manages inert faces and transfers focus.
// Do not also include featured.js as a classic script on docs.html.
import("./featured.js");
