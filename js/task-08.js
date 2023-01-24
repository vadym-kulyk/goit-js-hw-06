const form = document.querySelector('.login-form');

function formSubmit(evt) {
    evt.preventDefault();
  const { elements: { email, password }} = evt.currentTarget;
if (email.value === "" || password.value === "") {
    alert(`Input can't be empty`);
}

console.log({ Email: email.value, Password: password.value });
    evt.currentTarget.reset();
}

form.addEventListener('submit', formSubmit);


