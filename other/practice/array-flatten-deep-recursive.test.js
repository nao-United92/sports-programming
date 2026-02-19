
const arrayFlattenDeepRecursive = require('./array-flatten-deep-recursive');

describe('arrayFlattenDeepRecursive', () => {
  test('flattens nested arrays', () => {
    expect(arrayFlattenDeepRecursive([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles already flat arrays', () => {
    expect(arrayFlattenDeepRecursive([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('handles empty arrays', () => {
    expect(arrayFlattenDeepRecursive([])).toEqual([]);
  });
});
