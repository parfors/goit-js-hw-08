import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const inputData = {};
refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit);
checkLocalStorage();

function checkLocalStorage() {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storageData) {
    for (const key in storageData) {
      refs.form[key].value = storageData[key];
    }
  }
}

function handlerInput(event) {
  inputData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function handlerSubmit(event) {
  event.preventDefault();
  const isValid = [...event.target.elements]
    .filter(el => el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA')
    .every(el => el.value !== '');
  if (isValid) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    refs.form.reset();
  } else {
    alert('Fill in the fields');
  }
}
