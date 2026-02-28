
const countOccurrencesOf = require('./array-count-occurrences-of');

test('counts occurrences of a value', () => {
  expect(countOccurrencesOf([1, 1, 2, 1, 2, 3], 1)).toBe(3);
  expect(countOccurrencesOf([1, 1, 2, 1, 2, 3], 4)).toBe(0);
});
