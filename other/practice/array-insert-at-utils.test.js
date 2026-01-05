import insertAt from './array-insert-at-utils';

describe('insertAt', () => {
  test('should insert an element at the specified index', () => {
    const original = [1, 2, 3];
    const result = insertAt(original, 1, 99);
    expect(result).toEqual([1, 99, 2, 3]);
    expect(original).toEqual([1, 2, 3]); // Original array should not be mutated
  });

  test('should insert an element at the beginning of the array', () => {
    const original = [1, 2, 3];
    const result = insertAt(original, 0, 99);
    expect(result).toEqual([99, 1, 2, 3]);
  });

  test('should insert an element at the end of the array', () => {
    const original = [1, 2, 3];
    const result = insertAt(original, 3, 99);
    expect(result).toEqual([1, 2, 3, 99]);
  });

  test('should handle indices greater than array length by inserting at the end', () => {
    const original = [1, 2, 3];
    const result = insertAt(original, 100, 99);
    expect(result).toEqual([1, 2, 3, 99]);
  });

  test('should handle negative indices', () => {
    const original = [1, 2, 3];
    expect(insertAt(original, -1, 99)).toEqual([1, 2, 99, 3]); // Insert before the last element
    expect(insertAt(original, -3, 99)).toEqual([99, 1, 2, 3]); // Insert at the beginning
  });

  test('should handle negative indices out of bounds by inserting at the beginning', () => {
    const original = [1, 2, 3];
    expect(insertAt(original, -100, 99)).toEqual([99, 1, 2, 3]);
  });

  test('should work with an empty array', () => {
    const original = [];
    const result = insertAt(original, 0, 99);
    expect(result).toEqual([99]);
    expect(insertAt([], 5, 'a')).toEqual(['a']); // Index out of bounds, inserts at end/beginning (0)
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => insertAt(null, 0, 1)).toThrow(TypeError);
    expect(() => insertAt('string', 0, 1)).toThrow(TypeError);
  });

  test('should throw an error if the index is not an integer', () => {
    expect(() => insertAt([1], 1.5, 1)).toThrow(TypeError);
    expect(() => insertAt([1], 'a', 1)).toThrow(TypeError);
  });
});
