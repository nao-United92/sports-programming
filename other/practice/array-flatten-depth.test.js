const flattenDepth = require('./array-flatten-depth');

describe('flattenDepth', () => {
  const arr = [1, [2, [3, [4]], 5]];

  test('flattens array with default depth (1)', () => {
    expect(flattenDepth(arr)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('flattens array with depth 2', () => {
    expect(flattenDepth(arr, 2)).toEqual([1, 2, 3, [4], 5]);
  });

  test('flattens array completely with large depth', () => {
    expect(flattenDepth(arr, 10)).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns a shallow copy if depth is 0', () => {
    expect(flattenDepth(arr, 0)).toEqual(arr);
    expect(flattenDepth(arr, 0)).not.toBe(arr);
  });
});
