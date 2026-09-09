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

const faqButtons = document.querySelectorAll('.faq-item__button');

faqButtons.forEach((button) => {
  const answerId = button.getAttribute('aria-controls');
  const answer = answerId ? document.getElementById(answerId) : null;

  if (!answer) {
    return;
  }

  button.setAttribute('aria-expanded', 'false');
  answer.hidden = true;

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    answer.hidden = isOpen;
  });
});

const demoForm = document.querySelector('.contact-form');
const contactFormStatus = document.querySelector('#contact-form-status');

if (demoForm && contactFormStatus) {
  const fieldsToValidate = Array.from(
    demoForm.querySelectorAll('[required], input[type="url"]')
  );

  const getErrorMessage = (field) => {
    if (field.required && !field.value.trim()) {
      if (field.id === 'contact-name') {
        return '名前を入力してください。';
      }

      if (field.id === 'contact-concern') {
        return '今気になっていることを入力してください。';
      }

      return 'この項目を入力してください。';
    }

    if (field.validity.typeMismatch) {
      return 'URLは https://example.com のように入力してください。';
    }

    return '';
  };

  const updateFieldError = (field) => {
    const errorElement = document.querySelector(`#${field.id}-error`);
    const message = getErrorMessage(field);

    if (!errorElement) {
      return message === '';
    }

    errorElement.textContent = message;
    errorElement.hidden = message === '';

    if (message) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }

    return message === '';
  };

  fieldsToValidate.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        updateFieldError(field);
      }

      contactFormStatus.textContent = '';
      contactFormStatus.classList.remove('is-error');
    });
  });

  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const validationResults = fieldsToValidate.map((field) => updateFieldError(field));
    const firstInvalidIndex = validationResults.findIndex((isValid) => !isValid);
    const firstInvalidField = firstInvalidIndex >= 0
      ? fieldsToValidate[firstInvalidIndex]
      : null;

    if (firstInvalidField) {
      contactFormStatus.textContent = '入力内容を確認してください。各項目の下に修正方法を表示しています。';
      contactFormStatus.classList.add('is-error');
      firstInvalidField.focus();
      return;
    }

    contactFormStatus.classList.remove('is-error');
    contactFormStatus.textContent = '相談内容を確認しました。こちらはポートフォリオ用の架空サービスのため、入力内容は外部へ送信されません。';
    contactFormStatus.focus();
  });
}
