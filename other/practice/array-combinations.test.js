
const combinations = require('./array-combinations');

test('should return combinations of size 2', () => {
  const result = combinations([1, 2, 3], 2);
  // [1, 2], [1, 3], [2, 3]
  expect(result).toHaveLength(3);
  expect(result).toContainEqual([1, 2]);
  expect(result).toContainEqual([1, 3]);
  expect(result).toContainEqual([2, 3]);
});

test('should return empty if k > length', () => {
    expect(combinations([1], 2)).toEqual([]);
});
