import '../sass/style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { initAccordion } from './modules/accordion';
import { initCookies } from './modules/cookies';
import { initDefer } from './modules/defer';
import { initMenu } from './modules/menu';
import { initHeader } from './modules/header';

import { initMessageClose, initMessageExpand } from './modules/message.js';
import { initBackground } from './modules/background.js';
import { initAbout } from './modules/about.js';
import { initAboutSkills } from './modules/skills.js';
import { initContact } from './modules/contact.js';
import { initAnimations } from './modules/animations.js';

gsap.registerPlugin(ScrollTrigger);

initAbout();
initContact();
initDefer();
initHeader();
initMenu();
initAnimations();
initBackground();
// initCookies();
initAccordion();
