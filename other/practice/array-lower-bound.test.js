
const lowerBound = require('./array-lower-bound');

test('should return index of first element >= target', () => {
  expect(lowerBound([1, 2, 4, 4, 5], 4)).toBe(2);
});

test('should return length if all smaller', () => {
  expect(lowerBound([1, 2, 3], 4)).toBe(3);
});

test('should return 0 if all greater', () => {
    expect(lowerBound([2, 3, 4], 1)).toBe(0);
});
