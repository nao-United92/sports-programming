
const without = require('./array-without-simple');

test('without should exclude specified values', () => {
  expect(without([1, 2, 1, 3], 1, 2)).toEqual([3]);
});

test('without should return array as is if no values match', () => {
  expect(without([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
});
