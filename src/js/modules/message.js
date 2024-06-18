export const initMessageClose = () => {
  const closeButtons = document.querySelectorAll('.message-bar-close');

  closeButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const messageBar = item.closest('.message-bar');
      messageBar.classList.add('close');
      sessionStorage.setItem('isMessageClose', true);
    });
  });
  if (sessionStorage.getItem('isMessageClose')) {
    const messageBars = document.querySelectorAll('.message-bar');
    messageBars.forEach((item) => {
      item.classList.add('close');
    });
  }
};

export const initMessageExpand = () => {
  const captions = document.querySelectorAll('[data-message-caption]');

  captions.forEach((item) => {
    item.addEventListener('click', () => {
      const content = item.parentElement.nextElementSibling;
      content.classList.toggle('block');
      item.classList.toggle('isActive');
    });
  });
};
