const lastN = require('./array-last-n');

test('lastN returns last n elements', () => {
  expect(lastN([1, 2, 3], 2)).toEqual([2, 3]);
  expect(lastN([1, 2, 3], 5)).toEqual([1, 2, 3]);
  expect(lastN([], 2)).toEqual([]);
});
