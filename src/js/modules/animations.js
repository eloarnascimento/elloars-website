import { gsap, Power3, Power2 } from 'gsap';
import { viewportMatches } from '../vendors/util';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  let tl = gsap.timeline();

  window.addEventListener('load', () => {
    setTimeout(function () {
      tl.to('.loader-content', {
        duration: 0.5,
        y: 90,
        ease: Power3.easeIn,
      });
      tl.to('.loader-inner', {
        duration: 0.75,
        scaleX: 0,
        ease: Power3.easeIn,
        transformOrigin: 'top',
      });
      tl.to('.loader', {
        duration: 0.75,
        scaleY: 0,
        ease: Power3.easeIn,
        transformOrigin: 'top',
      });

      tl.from('.hero-title', {
        duration: 0.5,
        y: 150,
        autoAlpha: 0,
        ease: Power3.easeOut,
      })
        .from('.hero-subtitle', {
          duration: 0.5,
          y: 150,
          autoAlpha: 0,
          ease: Power3.easeOut,
        })
        .from('.hero-buttons', {
          duration: 0.5,
          y: 150,
          autoAlpha: 0,
          ease: Power3.easeOut,
        })
        .from('.header-logo img', {
          duration: 0.3,
          y: -40,
          autoAlpha: 0,
        })
        .from('.header-trigger', {
          duration: 0.3,
          y: -40,
          autoAlpha: 0,
        });

      if (!viewportMatches(1200)) {
        tl.from('.header-menu .menu-item', {
          duration: 0.2,
          y: -40,
          autoAlpha: 0,
          stagger: 0.1,
        });
      }

      tl.from('.hero-buttons a', {
        duration: 0.3,
        y: -40,
        autoAlpha: 0,
        stagger: 0.2,
      });
    }, 1000);
  });
};
export const initServicesAnimations = () => {
  if (!document.querySelector('.services')) return;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.services',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
      scrub: false,
      once: true,
    },
  });

  tl.from('.services .services-item', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
    stagger: 0.4,
  });

  let projects = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
      scrub: false,
      once: true,
    },
  });

  projects.from('.projects-item', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
    stagger: 0.4,
  });

  let about = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
      scrub: false,
      once: true,
    },
  });

  about.from('.about-content h2', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
  });
  about.from('.about-content h3', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
  });

  let contact = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
      scrub: false,
      once: true,
    },
  });

  contact.from('.contact-mail', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
  });
  contact.from('.contact-content h2', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
  });
  contact.from('.contact-buttons a', {
    opacity: 0,
    translateY: '50px',
    ease: Power2.easeOut,
    duration: 1,
  });
};
