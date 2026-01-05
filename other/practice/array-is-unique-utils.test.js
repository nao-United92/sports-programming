import isUnique from './array-is-unique-utils';

describe('isUnique', () => {
  test('should return true for an array with all unique elements', () => {
    expect(isUnique([1, 2, 3, 4])).toBe(true);
    expect(isUnique(['a', 'b', 'c'])).toBe(true);
    expect(isUnique([])).toBe(true);
  });

  test('should return false for an array with duplicate elements', () => {
    expect(isUnique([1, 2, 2, 3])).toBe(false);
    expect(isUnique(['a', 'b', 'a'])).toBe(false);
  });

  test('should handle arrays with mixed types', () => {
    expect(isUnique([1, '1', 2])).toBe(true);
    expect(isUnique([1, '1', 1])).toBe(false);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => isUnique(null)).toThrow(TypeError);
    expect(() => isUnique(undefined)).toThrow(TypeError);
    expect(() => isUnique('string')).toThrow(TypeError);
    expect(() => isUnique(123)).toThrow(TypeError);
    expect(() => isUnique({})).toThrow(TypeError);
  });
});
