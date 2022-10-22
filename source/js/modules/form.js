const forms = document.querySelectorAll('.form');
const headerButton = document.querySelector('.header__button');
const modalFormName = document.querySelector('#md-form-name');

const ALLOWED_KEYS = [
  'Backspace',
  'Tab',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft'
];

export const setModalFormFocus = () => {
  headerButton.addEventListener('click', () => {
    setTimeout(() => modalFormName.focus(), 500);
  });
};

const initializeValidation = (form) => {
  const formPhone = form.querySelector('#form-phone');

  if (formPhone) {
    const phonePattern = /[0-9]/;

    const onFormPhoneKeydown = (event) => {
      if (!phonePattern.test(event.key) && !ALLOWED_KEYS.includes(event.key)) {
        event.preventDefault();
      }

      if (formPhone.value.length === 7 && event.key === 'Backspace') {
        formPhone.value = formPhone.value.substring(0, 6);
      }

      if (formPhone.value.length === 3 && event.key === 'Backspace') {
        event.preventDefault();
      }
    };

    formPhone.addEventListener('focus', () => {
      if (!formPhone.value) {
        formPhone.value = '+7(';
      }

      formPhone.addEventListener('keydown', onFormPhoneKeydown);
    });

    formPhone.addEventListener('input', () =>{
      if (formPhone.value.length === 6) {
        formPhone.value += ')';
      }
    });

    formPhone.addEventListener('blur', () => {
      if (formPhone.value === '+7(') {
        formPhone.value = '';
      }

      formPhone.removeEventListener('keydown', onFormPhoneKeydown);
    });
  }
};

export const initializeFormsValidation = () => {
  if (forms.length) {
    [...forms].forEach(initializeValidation);
  }
};
