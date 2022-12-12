const inputElem = document.querySelector('.search__input');
const btnElem = document.querySelector('.search__btn');

const getInputValue = () => {
  console.log(inputElem.value);
}

btnElem.addEventListener('click', getInputValue)