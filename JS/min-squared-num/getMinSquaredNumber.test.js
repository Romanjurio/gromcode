import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get minimum module squared number of array', () => {
  let result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
