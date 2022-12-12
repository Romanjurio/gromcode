const btnElem = document.querySelector('.single-use-btn');

const getText = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', getText);
}

btnElem.addEventListener('click', getText);
