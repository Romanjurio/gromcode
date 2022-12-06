const squaredNumbers = () => {
  const pseudoNumbersList = document.querySelectorAll('.number');
  const numbersList = Array.from(pseudoNumbersList);

  numbersList.map((num) => {
    let squaredNumbers = Math.pow(num.dataset.number, 2);
    num.dataset.squaredNumber = squaredNumbers;
  });

};

squaredNumbers();