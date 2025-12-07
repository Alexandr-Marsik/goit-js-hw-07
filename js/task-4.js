const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const userData = {
    email: email,
    password: password,
  };
  console.log(userData);
  event.target.reset();
}
