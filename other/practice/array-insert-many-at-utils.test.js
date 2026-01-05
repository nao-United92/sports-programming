import insertManyAt from './array-insert-many-at-utils';

describe('insertManyAt', () => {
  test('should insert multiple elements at the specified index', () => {
    const original = [1, 2, 3];
    const result = insertManyAt(original, 1, 99, 100);
    expect(result).toEqual([1, 99, 100, 2, 3]);
    expect(original).toEqual([1, 2, 3]); // Original array should not be mutated
  });

  test('should insert multiple elements at the beginning of the array', () => {
    const original = [1, 2, 3];
    const result = insertManyAt(original, 0, 99, 100);
    expect(result).toEqual([99, 100, 1, 2, 3]);
  });

  test('should insert multiple elements at the end of the array', () => {
    const original = [1, 2, 3];
    const result = insertManyAt(original, 3, 99, 100);
    expect(result).toEqual([1, 2, 3, 99, 100]);
  });

  test('should handle indices greater than array length by inserting at the end', () => {
    const original = [1, 2, 3];
    const result = insertManyAt(original, 100, 99, 100);
    expect(result).toEqual([1, 2, 3, 99, 100]);
  });

  test('should handle negative indices', () => {
    const original = [1, 2, 3];
    expect(insertManyAt(original, -1, 99, 100)).toEqual([1, 2, 99, 100, 3]); // Insert before the last element
    expect(insertManyAt(original, -3, 99, 100)).toEqual([99, 100, 1, 2, 3]); // Insert at the beginning
  });

  test('should handle negative indices out of bounds by inserting at the beginning', () => {
    const original = [1, 2, 3];
    expect(insertManyAt(original, -100, 99, 100)).toEqual([99, 100, 1, 2, 3]);
  });

  test('should work with an empty array', () => {
    const original = [];
    const result = insertManyAt(original, 0, 99, 100);
    expect(result).toEqual([99, 100]);
    expect(insertManyAt([], 5, 'a', 'b')).toEqual(['a', 'b']); // Index out of bounds, inserts at end/beginning (0)
  });

  test('should insert no elements if none are provided', () => {
    const original = [1, 2, 3];
    const result = insertManyAt(original, 1);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => insertManyAt(null, 0, 1)).toThrow(TypeError);
    expect(() => insertManyAt('string', 0, 1)).toThrow(TypeError);
  });

  test('should throw an error if the index is not an integer', () => {
    expect(() => insertManyAt([1], 1.5, 1)).toThrow(TypeError);
    expect(() => insertManyAt([1], 'a', 1)).toThrow(TypeError);
  });
});
