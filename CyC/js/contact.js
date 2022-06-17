
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
  e.preventDefault();

  if (name.value.length < 3) {
    errorElement.innerHTML = 'Tu nombre debe tener por lo menos tres caracteres.';
    return false;
  }

  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Por favor ingrese una direccion de correo válida.';
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Por favor ingrese una direccion de correo válida.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'El mensaje debe contener al menos quince caracteres.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Gracias! El mensaje ha sido enviado.';

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
