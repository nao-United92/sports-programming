const arrayNthElement = require('./array-nth-element');

test('returns the nth element of an array', () => {
  expect(arrayNthElement(['a', 'b', 'c'], 1)).toBe('b');
});

test('returns the nth element from the end if n is negative', () => {
  expect(arrayNthElement(['a', 'b', 'c'], -1)).toBe('c');
});

test('returns the first element if n is 0', () => {
  expect(arrayNthElement(['a', 'b', 'c'])).toBe('a');
});
