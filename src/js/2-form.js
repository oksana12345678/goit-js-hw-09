const form = document.querySelector('.feedback-form');

const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

form.addEventListener('input', saveForm);

window.addEventListener('load', loadForm);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value.trim() === '') {
    alert('Please enter your email');
    return;
  }

  if (form.elements.message.value.trim() === '') {
    alert('Please enter your message');
    return;
  }
  localStorage.removeItem('feedback-form-state');

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  form.reset();
});
