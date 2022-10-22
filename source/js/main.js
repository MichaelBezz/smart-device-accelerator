import {iosVhFix} from './utils/ios-vh-fix.js';
import {checkWebpFormat} from './utils/webp-format.js';
import {createSmoothScroll} from './utils/scroll-smooth.js';
import {initModals} from './modules/modals/init-modals.js';
import {initializeToggleContent} from './modules/about.js';
import {setModalFormFocus, initializeFormsValidation} from './modules/form.js';
import {initializeLocalStorage} from './modules/local-storage.js';
import {initializeAccordion} from './modules/footer.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  checkWebpFormat();
  createSmoothScroll();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const breakpoint = window.matchMedia('(max-width:767px)');

    const breakpointChecker = () => {
      if (breakpoint.matches) {
        initializeToggleContent(true);
        initializeAccordion();
      } else {
        initializeToggleContent();
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    initModals();
    setModalFormFocus();
    initializeFormsValidation();
    initializeLocalStorage();

    window.addEventListener('resize', breakpointChecker);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
