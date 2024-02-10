const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

form.elements.email.value = localStorage.getItem(localStorageKey) || '';
form.elements.message.value = localStorage.getItem(localStorageKey) || '';

form.addEventListener('input', event => {
  const formInputValue = event.target.value.trim();
  localStorage.setItem(localStorageKey, formInputValue);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.email.value.trim();
  const messageValue = event.target.elements.message.value.trim();

  const FormData = { email: inputValue, message: messageValue };
  if (inputValue !== '' && messageValue !== '') {
    console.log(FormData);

    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    console.log('Please fill all feilds');
  }
});
