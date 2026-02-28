
const removeAt = require('./array-remove-at');

test('removes value at index', () => {
  expect(removeAt([1, 2, 3, 4], 2)).toEqual([1, 2, 4]);
  expect(removeAt([1, 2, 3], 0)).toEqual([2, 3]);
});
