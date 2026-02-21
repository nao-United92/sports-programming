
const head = require('./array-head');

test('should return the first element', () => {
  expect(head([1, 2, 3])).toBe(1);
});

test('should return undefined if empty', () => {
  expect(head([])).toBeUndefined();
});

test('should return undefined if null', () => {
  expect(head(null)).toBeUndefined();
});
