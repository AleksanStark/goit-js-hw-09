const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form';

form.elements.email.value = localStorage.getItem(localStorageKey) || '';
form.elements.message.value = localStorage.getItem(localStorageKey) || '';

form.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.email.value;
  const messageValue = event.target.elements.message.value;

  const FormData = { email: inputValue, message: messageValue };
  console.log(FormData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
