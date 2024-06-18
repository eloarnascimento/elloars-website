export const initDefer = () => {
  const imgDefer = document.querySelectorAll('.defer'),
    styleDefer = document.querySelectorAll('.defer-style');

  if (imgDefer) {
    imgDefer.forEach(img => {
      if (img.getAttribute('data-src')) {
        img.setAttribute('src', img.getAttribute('data-src'));
      }
    })
  }

  if (styleDefer) {
    styleDefer.forEach(element => {
      if (element.getAttribute('data-style')) {
        element.style.backgroundImage = "url(" + element.getAttribute('data-style') + ")";
      }
    })
  }
}