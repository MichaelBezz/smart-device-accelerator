import iMask from 'imask';

const forms = document.querySelectorAll('[data-form]');
const headerButton = document.querySelector('[data-open-modal=feedback]');
const modalFormName = document.querySelector('[data-md-form-name]');

const maskOptions = {
  mask: '+{7}(000)0000000',
};

export const setModalFormFocus = () => {
  if (headerButton && modalFormName) {
    headerButton.addEventListener('click', () => {
      setTimeout(() => modalFormName.focus(), 500);
    });
  }
};

const initializeValidation = (form) => {
  const phoneInput = form.querySelector('[name="customer-phone"]');

  if (phoneInput) {
    iMask(phoneInput, maskOptions);
  }
};

export const initializeFormsValidation = () => {
  if (forms.length) {
    [...forms].forEach(initializeValidation);
  }
};
