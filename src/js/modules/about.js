import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAbout = () => {
  const aboutScroll = document.querySelector('[data-about-scroll]');
  const textColor = document.querySelector('.about-content p');
  if (!textColor) return;
  const text = textColor.innerText;

  textColor.innerHTML = text
    .split('')
    .map((char) => `<span>${char}</span>`)
    .join('');
  const chars = textColor.querySelectorAll('span');

  gsap.set(chars, { className: '+=colored' });

  const timeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1.5,
      ease: 'none',
    },
  });

  chars.forEach((char, index) => {
    timeline.to(
      char,
      {
        className: 'colored',
      },
      index * 0.1,
    );
  });

  ScrollTrigger.create({
    trigger: aboutScroll,
    start: 'top 5%',
    end: 'bottom 20%',
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const direction = self.direction > 0 ? 1 : -1;
      if (direction === -1) {
        for (
          let i = chars.length - 1;
          i >= Math.round(self.progress * chars.length);
          i--
        ) {
          chars[i].classList.remove('colored');
        }
      } else {
        timeline.progress(direction * self.progress);
      }
    },
    invalidateOnRefresh: true,
  });
};
