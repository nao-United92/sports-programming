const isUnique = require('./array-is-unique');

describe('isUnique', () => {
  test('should return true for an array with all unique elements', () => {
    expect(isUnique([1, 2, 3, 4, 5])).toBe(true);
  });

  test('should return false for an array with duplicate elements', () => {
    expect(isUnique([1, 2, 2, 3, 4])).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(isUnique([])).toBe(true);
  });

  test('should return true for a single-element array', () => {
    expect(isUnique([1])).toBe(true);
  });

  test('should handle arrays with mixed data types and duplicates', () => {
    expect(isUnique([1, 'a', 1])).toBe(false);
    expect(isUnique([1, 'a', 2, 'b'])).toBe(true);
  });

  test('should handle arrays with objects (reference equality)', () => {
    const obj1 = {
      a: 1
    };
    const obj2 = {
      a: 1
    };
    expect(isUnique([obj1, obj1])).toBe(false);
    expect(isUnique([obj1, obj2])).toBe(true); // Different references
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => isUnique(null)).toThrow('Argument must be an array.');
    expect(() => isUnique('string')).toThrow('Argument must be an array.');
    expect(() => isUnique(123)).toThrow('Argument must be an array.');
  });
});
