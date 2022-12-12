const inputElem = document.querySelector('.text-input');

const changeInput = (event) => {
    console.log(event.target.value);
};

inputElem.addEventListener('change', changeInput)