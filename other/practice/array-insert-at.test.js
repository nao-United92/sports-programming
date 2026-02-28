
const insertAt = require('./array-insert-at');

test('inserts value at index', () => {
  expect(insertAt([1, 2, 4], 2, 3)).toEqual([1, 2, 3, 4]);
  expect(insertAt([1, 2, 3], 0, 0)).toEqual([0, 1, 2, 3]);
});
