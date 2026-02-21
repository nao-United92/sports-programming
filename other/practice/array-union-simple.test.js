
const union = require('./array-union-simple');

test('union of [1, 2] and [2, 3] should be [1, 2, 3]', () => {
  expect(union([1, 2], [2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('union should handle duplicates correctly', () => {
  expect(union([1, 1], [1, 1])).toEqual([1]);
});
