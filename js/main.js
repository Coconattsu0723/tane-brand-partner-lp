const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');
const menuLabel = menuToggle?.querySelector('.menu-toggle__label');
const desktopMedia = window.matchMedia('(min-width: 64rem)');

if (menuToggle && siteNavigation && menuLabel) {
  const setMenuState = (isOpen, returnFocus = false) => {
    if (desktopMedia.matches) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuLabel.textContent = 'メニューを開く';
      siteNavigation.hidden = false;
      document.body.classList.remove('is-menu-open');
      return;
    }

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuLabel.textContent = isOpen ? 'メニューを閉じる' : 'メニューを開く';
    siteNavigation.hidden = !isOpen;
    document.body.classList.toggle('is-menu-open', isOpen);

    if (returnFocus) {
      menuToggle.focus();
    }
  };

  const syncMenuForViewport = () => {
    setMenuState(false);
  };

  syncMenuForViewport();

  menuToggle.addEventListener('click', () => {
    if (desktopMedia.matches) {
      return;
    }

    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  siteNavigation.addEventListener('click', (event) => {
    if (!desktopMedia.matches && event.target.closest('a')) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      !desktopMedia.matches
      && event.key === 'Escape'
      && menuToggle.getAttribute('aria-expanded') === 'true'
    ) {
      setMenuState(false, true);
    }
  });

  desktopMedia.addEventListener('change', syncMenuForViewport);
}
