import './scss/main.scss'

/* ===========================================================================
 Font-Awesome
 =========================================================================== */

import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {
    faXmark,
    faShareNodes,
    faEnvelope,
    faPhone,
    faUniversalAccess,
    faSignOutAlt,
    faRightLong,
    faBars,
    faMicrophoneLines,
    faChevronDown,
    faHeart,
    faSearch,
    faQuoteRight,
    faArrowRight,
    faArrowLeft

} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from  '@fortawesome/free-regular-svg-icons'
import {
    faFacebookF,
    faSoundcloud,
    faTwitter,
    faTwitch,
    faYoutube,
    faFacebookSquare,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faBarsSort } from '@fortawesome/pro-solid-svg-icons'

library.add(
    faXmark,
    faUserCircle,
    faUniversalAccess,
    faSignOutAlt,
    faRightLong,
    faFacebookF, faFacebookSquare,
    faSoundcloud,
    faTwitter,
    faLinkedin,
    faTwitch,
    faBars,
    faBarsSort,
    faMicrophoneLines,
    faYoutube,
    faShareNodes,
    faEnvelope,
    faPhone,
    faInstagram,
    faChevronDown,
    faHeart,
    faSearch,
    faQuoteRight,
    faArrowRight,
    faArrowLeft
);

dom.i2svg();

dom.watch();

/* ===========================================================================
 Application JS
 =========================================================================== */
import "@markusantonwolf/ta-youtube/src/scripts/ta-youtube.js";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'sharer.js'
import "./js/app";

/* ===========================================================================
 Init AlpineJS
 =========================================================================== */
import "@kingshott/iodine";

import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
window.Alpine = Alpine;
Alpine.plugin(persist);

Alpine.start();





