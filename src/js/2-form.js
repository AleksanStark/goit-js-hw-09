const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

form.elements.email.value = localStorage.getItem(localStorageKey) || '';
form.elements.message.value = localStorage.getItem(localStorageKey) || '';

form.addEventListener('input', event => {
  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();
  const formUserData = JSON.stringify({
    email: emailValue,
    message: messageValue,
  });
  localStorage.setItem(localStorageKey, JSON.parse(formUserData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (inputValue !== '' && messageValue !== '') {
    const formUserData = { email: inputValue, message: messageValue };
    console.log(formUserData);

    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill all fields');
  }
});
