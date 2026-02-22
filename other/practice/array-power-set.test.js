
const powerSet = require('./array-power-set');

test('should return power set for [1, 2]', () => {
  const result = powerSet([1, 2]);
  // [], [1], [2], [1, 2]
  expect(result).toHaveLength(4);
  expect(result).toContainEqual([]);
  expect(result).toContainEqual([1]);
  expect(result).toContainEqual([2]);
  expect(result).toContainEqual([1, 2]);
});

test('should return [[]] for empty', () => {
    expect(powerSet([])).toEqual([[]]);
});
