
const interleave = require('./array-interleave');

test('interleaves arrays', () => {
  expect(interleave([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  expect(interleave([1], [2, 3])).toEqual([1, 2, 3]);
});
