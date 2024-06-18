import ScrollTrigger from 'gsap/ScrollTrigger';

export const initHeader = () => {
  ScrollTrigger.create({
    start: 'top -70',
    end: 99999,
    toggleClass: { className: 'header--fixed', targets: '.header' },
  });
};
