
const binarySearch = require('./array-binary-search');

test('should find element in sorted array', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test('should return -1 if not found', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});

test('should work with single element', () => {
    expect(binarySearch([1], 1)).toBe(0);
});
