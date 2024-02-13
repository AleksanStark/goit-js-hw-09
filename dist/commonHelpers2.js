import '../assets/styles-e2a71a84.js';
const e = document.querySelector('.feedback-form'),
  a = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
e.email.value = a.email || '';
e.message.value = a.message || '';
e.addEventListener('input', function (t) {
  const { name: m, value: r } = t.target,
    s = { ...a, [m]: r.trim() };
  localStorage.setItem('feedback-form-state', JSON.stringify(s));
});
e.addEventListener('submit', function (t) {
  t.preventDefault(),
    e.email.value.trim() !== '' &&
      e.message.value.trim() !== '' &&
      (console.log({
        email: e.email.value.trim(),
        message: e.message.value.trim(),
      }),
      localStorage.removeItem('feedback-form-state'),
      e.reset());
});
//# sourceMappingURL=commonHelpers2.js.map
