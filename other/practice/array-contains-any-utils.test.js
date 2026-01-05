import containsAny from './array-contains-any-utils';

describe('containsAny', () => {
  test('should return true if the array contains any of the values', () => {
    expect(containsAny([1, 2, 3, 4], [3, 5])).toBe(true);
    expect(containsAny(['a', 'b', 'c'], ['d', 'b'])).toBe(true);
  });

  test('should return false if the array does not contain any of the values', () => {
    expect(containsAny([1, 2, 3, 4], [5, 6])).toBe(false);
    expect(containsAny(['a', 'b', 'c'], ['d', 'e'])).toBe(false);
  });

  test('should return false for empty arrays', () => {
    expect(containsAny([], [1, 2])).toBe(false);
    expect(containsAny([1, 2], [])).toBe(false);
    expect(containsAny([], [])).toBe(false);
  });

  test('should handle arrays with mixed types', () => {
    expect(containsAny([1, '2', 3], ['2', 4])).toBe(true);
    expect(containsAny([1, '2', 3], [2, 4])).toBe(false);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => containsAny(null, [1])).toThrow(TypeError);
    expect(() => containsAny('string', [1])).toThrow(TypeError);
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => containsAny([1], null)).toThrow(TypeError);
    expect(() => containsAny([1], 'string')).toThrow(TypeError);
  });
});
