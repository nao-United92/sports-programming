
const takeRight = require('./array-take-right-simple');

test('takeRight should return last n elements', () => {
  expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
});

test('takeRight should return default 1 element from end', () => {
  expect(takeRight([1, 2, 3])).toEqual([3]);
});

test('takeRight with 0 should return empty', () => {
  expect(takeRight([1, 2, 3], 0)).toEqual([]);
});
