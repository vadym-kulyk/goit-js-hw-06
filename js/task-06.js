const inputVal = document.querySelector('[data-length="6"]');

function onInputChange(evt) {
  
  const inputTextLength = inputVal.value.length;
  console.log(evt.currentTarget.value.length);

 if (inputTextLength === 6) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  } else {
    inputVal.classList.add('invalid');
    inputVal.classList.remove('valid');
  }
}

inputVal.addEventListener('blur', onInputChange);