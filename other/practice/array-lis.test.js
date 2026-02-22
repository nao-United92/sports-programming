
const lengthOfLIS = require('./array-lis');

test('should return LIS length', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
});

test('should return 0 for empty array', () => {
  expect(lengthOfLIS([])).toBe(0);
});

test('should return 1 for single element', () => {
    expect(lengthOfLIS([7])).toBe(1);
});
