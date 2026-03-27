const rotateToRightAdvanced = require('./array-rotate-to-right-advanced');

describe('rotateToRightAdvanced', () => {
  test('should rotate array to the right by k steps', () => {
    expect(rotateToRightAdvanced([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test('should handle k greater than array length', () => {
    expect(rotateToRightAdvanced([1, 2, 3], 4)).toEqual([3, 1, 2]);
  });

  test('should return same array when k is 0', () => {
    expect(rotateToRightAdvanced([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(rotateToRightAdvanced([], 2)).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(rotateToRightAdvanced(null, 2)).toBe(null);
  });

  test('should not mutate original array', () => {
    const original = [1, 2, 3];
    const result = rotateToRightAdvanced(original, 1);
    expect(result).not.toBe(original);
    expect(original).toEqual([1, 2, 3]);
  });
});
