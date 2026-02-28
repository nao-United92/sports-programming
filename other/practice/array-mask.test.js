
const mask = require('./array-mask');

test('masks array elements', () => {
  expect(mask([1, 2, 3, 4], [true, false, false, true])).toEqual([1, 4]);
});
