
const take = require('./array-take-simple');

test('take should return first n elements', () => {
  expect(take([1, 2, 3], 2)).toEqual([1, 2]);
});

test('take should return default 1 element if n is omitted', () => {
  expect(take([1, 2, 3])).toEqual([1]);
});

test('take should return all elements if n > length', () => {
  expect(take([1, 2], 5)).toEqual([1, 2]);
});
