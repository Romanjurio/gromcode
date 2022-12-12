const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (elem) => {
    console.log(elem.target.dataset.pageNumber);
};

[...buttons].forEach((button) => button.addEventListener('click', handleClick));
