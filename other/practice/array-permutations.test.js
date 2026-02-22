
const permutations = require('./array-permutations');

test('should generate permutations for [1, 2]', () => {
  const result = permutations([1, 2]);
  expect(result).toHaveLength(2);
  expect(result).toContainEqual([1, 2]);
  expect(result).toContainEqual([2, 1]);
});

test('should return [[]] for empty array', () => {
    expect(permutations([])).toEqual([[]]);
});
