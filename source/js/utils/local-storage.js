export const initializeLocalStorage = () => {
  if (window.localStorage) {
    const elements = document.querySelectorAll('[data-form-storage]');

    [...elements].forEach((element) => {
      const name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';
      element.onkeyup = () => {
        localStorage.setItem(name, element.value);
      };
    });
  }
};
