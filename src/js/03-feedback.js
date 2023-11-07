import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const LS_KEY = "feedback-form-state";
const savedData = localStorage.getItem(LS_KEY);

const handlerInput = throttle(function(evt) {
  const values = {
    email: input.value,
    message: textarea.value
  }
 
  localStorage.setItem(LS_KEY, JSON.stringify(values))
}, 5000)

input.addEventListener('input', handlerInput);
textarea.addEventListener('input', handlerInput);

if (savedData) {
  const data = JSON.parse(savedData);
  input.value = data.email;
   textarea.value = data.message;

}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(LS_KEY);
  form.reset();
});