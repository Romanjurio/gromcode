const buttonElems = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

[...buttonElems].forEach(btn => btn.addEventListener('click', handleClick));
