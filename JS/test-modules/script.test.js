

// console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

it('17 in Africa 17', () => {
  expect(17).toEqual(17);
});

it('18 not equal 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) => {
    return arr.filter((el) => el % 2 === 0);
};


it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(result).toEqual([2, 4, 6, 8, 10]);
});