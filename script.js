const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');
const button = document.querySelector('.btn');
const errorMessage = document.querySelector('small');
const names = document.querySelectorAll('.names');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#number');

button.addEventListener('click', checkInputs);

function checkInputs() {
  if (password.value !== passwordCheck.value) {
    password.classList.add('error');
    passwordCheck.classList.add('error');
    errorMessage.classList.add('error-message');
  } else if (password.value === '' || password.value.length < 7) {
    password.classList.add('error');
    passwordCheck.classList.add('error');
  } else {
    password.classList.remove('error');
    passwordCheck.classList.remove('error');
    errorMessage.classList.remove('error-message');
    password.classList.add('valid');
    passwordCheck.classList.add('valid');
  }

  names.forEach(name => {
    if (name.value === '') {
      name.classList.add('error');
    } else {
      name.classList.remove('error');
      name.classList.add('valid');
    }
  });

  if (!checkEmail(email.value)) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    email.classList.add('valid');
  }
  if (!checkPhone(phoneNum.value)) {
    phoneNum.classList.add('error');
  } else {
    phoneNum.classList.remove('error');
    phoneNum.classList.add('valid');
  }
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkPhone(phone) {
  return /^\+?[1-9][0-9]{7,14}$/.test(phone);
}
