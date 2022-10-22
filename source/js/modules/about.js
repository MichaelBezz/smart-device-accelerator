const aboutContent = document.querySelector('.about__content');
const aboutButton = document.querySelector('.about__button');
const aboutDefaultContent = document.querySelectorAll('[data-js=about-content-default]');

export const initializeToggleContent = (isMobile = false) => {
  if (aboutContent && aboutButton) {
    const contentFullHeight = aboutContent.offsetHeight;
    let contentDefaultHeight = 208;
    let isHidden = true;

    const setDefaultHeight = () => {
      if (isMobile) {
        aboutContent.style.height = `${contentDefaultHeight}px`;
        return;
      }

      if (!isMobile && aboutDefaultContent.length > 1) {
        contentDefaultHeight = [...aboutDefaultContent].reduce((result, value) => result.scrollHeight + value.scrollHeight);
        aboutContent.style.height = `${contentDefaultHeight}px`;
      }
    };

    setDefaultHeight();

    const hideContent = () => {
      aboutContent.style.height = `${contentDefaultHeight}px`;
      aboutButton.textContent = 'Подробнее';
      isHidden = true;
    };

    const showContent = () => {
      aboutContent.style.height = `${contentFullHeight}px`;
      aboutButton.textContent = 'Свернуть';
      isHidden = false;
    };

    window.addEventListener('resize', () => {
      setDefaultHeight();
    });

    aboutButton.addEventListener('click', () => {
      if (isHidden) {
        showContent();
      } else {
        hideContent();
      }
    });
  }
};
