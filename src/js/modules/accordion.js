export const initAccordion = () => {
  const accordionTitle = document.querySelectorAll('[data-accordion-title]');

  if (accordionTitle) {
    accordionTitle.forEach((item) => {
      const accordionContent = item.nextElementSibling;
      item.addEventListener('click', () => {
        item.classList.toggle('isActive');
        accordionContent.classList.toggle('isActive');
      });
    });
  }
};
