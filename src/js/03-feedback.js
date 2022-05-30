
const refs = {
    form: document.querySelector('.feedback-form'),
}
const inputData = {};
refs.form.addEventListener('input', handlerInput);

checkLocalStorage();

function checkLocalStorage() {
    // const storageData = JSON.parse('feedback-form-state');
    // if (storageData) {
    refs.form.email.value = '5';
    
        console.log(refs.form.email.value);
    // }
}

function handlerInput(event) {
    console.log(event.target.value);
    inputData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData))
}





// function checkLocalStorage() {
//   const storageData = JSON.parse(localStorage.getItem(USER_INPUT_FORM_KEY));
//   if (storageData) {
//     for (key in storageData) {
//       refs.formLinks[key].value = storageData[key];
//     }
//   }
// }

// function addToLocalStorage(e) {
//   inputData[e.target.name] = e.target.value;
//   localStorage.setItem(USER_INPUT_FORM_KEY, JSON.stringify(inputData));
// }
