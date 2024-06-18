export const initAboutSkills = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('[data-about-skills]');
    const items = circle.querySelectorAll('li');
    const radius = circle.clientWidth / 2.5;
    const angleStep = 360 / items.length;

    items.forEach((item, index) => {
      const angle = angleStep * index;
      const radians = angle * (Math.PI / 180);
      const x =
        radius * Math.cos(radians) +
        circle.clientWidth / 2 -
        item.clientWidth / 2;
      const y =
        radius * Math.sin(radians) +
        circle.clientHeight / 2 -
        item.clientHeight / 2;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });

    window.addEventListener('resize', () => {
      const radius = circle.clientWidth / 2.5;
      items.forEach((item, index) => {
        const angle = angleStep * index;
        const radians = angle * (Math.PI / 180);
        const x =
          radius * Math.cos(radians) +
          circle.clientWidth / 2 -
          item.clientWidth / 2;
        const y =
          radius * Math.sin(radians) +
          circle.clientHeight / 2 -
          item.clientHeight / 2;
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
};
