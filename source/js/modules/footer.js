const accordions = document.querySelectorAll('[data-accordion]');
const accordionButtons = document.querySelectorAll('[data-accordion-button]');

export const initializeAccordion = () => {
  const onAccordionButtonClick = (button) => {
    const accordion = button.closest('[data-accordion]');
    const isOpen = accordion.classList.contains('is-open');

    [...accordions].forEach((item) => {
      item.classList.remove('is-open');
      item.classList.add('is-close');
    });

    if (!isOpen) {
      accordion.classList.add('is-open');
      accordion.classList.remove('is-close');
    }
  };

  if (accordionButtons) {
    [...accordionButtons].forEach((accordionButton) => {
      const accordion = accordionButton.closest('[data-accordion]');
      accordion.classList.remove('js-exception');
      accordion.classList.add('is-close');

      accordionButton.addEventListener('click', () => onAccordionButtonClick(accordionButton));
    });
  }
};
