const arraySortedIndex = require('./array-sorted-index');

test('returns the lowest index where value should be inserted', () => {
  expect(arraySortedIndex([30, 50], 40)).toBe(1);
});

test('handles descending order', () => {
  expect(arraySortedIndex([50, 30], 40)).toBe(1);
});

test('handles value smaller than all elements', () => {
  expect(arraySortedIndex([30, 50], 10)).toBe(0);
});

test('handles value larger than all elements', () => {
  expect(arraySortedIndex([30, 50], 60)).toBe(2);
});
