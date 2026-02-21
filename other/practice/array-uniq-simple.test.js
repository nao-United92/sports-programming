
const uniq = require('./array-uniq-simple');

test('uniq should remove duplicates', () => {
  expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
});

test('uniq should handle empty arrays', () => {
  expect(uniq([])).toEqual([]);
});
