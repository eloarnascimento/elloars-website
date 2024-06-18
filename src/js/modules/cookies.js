export const initCookies = () => {
  const initAcceptCookies = (cookies) => {
    const cookiesClose = document.querySelectorAll('[data-cookies-close]');

    cookiesClose.forEach(item => {
      item.addEventListener('click', () => {
        cookies.classList.add('accepted');
        cookies.classList.remove('not-accepted');
        localStorage.setItem('cookies', 'accepted')
      })
    });
  }

  initAcceptCookies()

  const checkCookiesIsAccepted = () => {
    const cookies = document.querySelector('[data-cookies]');
    const isCookiesAccepted = localStorage.getItem('cookies') === 'accepted' ? true : false;
    if (isCookiesAccepted) {
      cookies.classList.add('accepted');
    } else {
      setTimeout(() => {
        cookies.classList.add('not-accepted');
        initAcceptCookies(cookies)
      }, 1000)
    }
  }

  checkCookiesIsAccepted()
}