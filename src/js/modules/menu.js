import { gsap, Power3 } from 'gsap';
import { viewportMatches } from '../vendors/util';

export const initMenu = () => {
  if (viewportMatches(1300)) {
    const menuTrigger = document.querySelector('[data-menu-trigger]'),
      menu = document.querySelector('[data-menu]'),
      menuItem = menu.querySelectorAll('.menu-item'),
      subMenu = menu.querySelectorAll('.sub-menu');

    if (menuTrigger && menuItem && menu) {
      let tl = gsap.timeline({ paused: true });

      tl.to(menu, {
        duration: 1,
        opacity: 1,
        width: '100vw',
        ease: Power3.easeInOut,
      });
      tl.from(
        menuItem,
        {
          duration: 0.4,
          y: '100%',
          opacity: 0,
          stagger: 0.15,
          ease: Power3.easeInOut,
        },
        '-=0.5',
      );

      tl.reverse();

      const toggleMenu = () => {
        tl.reversed(!tl.reversed());
      };

      menuTrigger.addEventListener('click', toggleMenu);

      menuItem.forEach((item) => {
        item.addEventListener('click', () => {
          const subMenu = item.querySelector('.sub-menu'),
            subMenuItem = subMenu.querySelectorAll('.menu-item');

          if (subMenu) {
            subMenu.classList.toggle('active');
            gsap.to(subMenu, {
              duration: 0.1,
              height: subMenu.scrollHeight,
              ease: Power3.easeInOut,
            });
            tl.from(
              subMenuItem,
              {
                duration: 0.4,
                y: '100%',
                opacity: 0,
                stagger: 0.1,
                ease: Power3.easeInOut,
              },
              '-=0.5',
            );
          } else {
            toggleMenu();
          }
        });
      });
    }
  }
};
