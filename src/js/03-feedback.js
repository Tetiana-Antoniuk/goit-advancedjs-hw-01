import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

let savedData = JSON.parse(localStorage.getItem(LS_KEY)) || {};

reload();

function reload() {
  email.value = savedData.email || '';
  message.value = savedData.message || '';
}

function handlerInput() {
  savedData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(savedData));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill all fields');
  }

  localStorage.removeItem(LS_KEY);
  evt.currentTarget.reset();
  savedData = {};
}
