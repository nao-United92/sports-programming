
const upperBound = require('./array-upper-bound');

test('should return index of first element > target', () => {
  expect(upperBound([1, 2, 4, 4, 5], 4)).toBe(4);
});

test('should return length if all smaller or equal', () => {
  expect(upperBound([1, 2, 3], 3)).toBe(3);
});

test('should return 0 if all greater', () => {
    expect(upperBound([2, 3, 4], 1)).toBe(0);
});
