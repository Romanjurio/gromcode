import { calc } from "./calculator";

it('should take only strings', () => {
  let result = calc(2 + 1);
  expect(result).toEqual(null);
});