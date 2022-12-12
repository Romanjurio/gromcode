const changeInput = document.querySelector('.text-input');

const logChangedText = () => {
  console.log(changeInput.value);
}

changeInput.addEventListener('change', logChangedText);