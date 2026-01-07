const { remove } = require('./array-remove-utils');

describe('remove', () => {
  test('should remove all occurrences of a specified value and return them', () => {
    const array = [1, 2, 3, 2, 4, 2];
    const removed = remove(array, 2);

    expect(array).toEqual([1, 3, 4]); // Original array is mutated
    expect(removed).toEqual([2, 2, 2]); // All removed elements are returned
  });

  test('should return an empty array if the value is not found', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    const removed = remove(array, 99);

    expect(array).toEqual(originalArray); // Original array is not mutated
    expect(removed).toEqual([]); // No elements were removed
  });

  test('should handle an empty array', () => {
    const array = [];
    const removed = remove(array, 1);

    expect(array).toEqual([]);
    expect(removed).toEqual([]);
  });

  test('should handle array with only one element and remove it', () => {
    const array = [1];
    const removed = remove(array, 1);

    expect(array).toEqual([]);
    expect(removed).toEqual([1]);
  });

  test('should work with mixed types of values', () => {
    const array = [1, 'a', null, undefined, 'a', 0];
    const removed = remove(array, 'a');

    expect(array).toEqual([1, null, undefined, 0]);
    expect(removed).toEqual(['a', 'a']);
  });

  test('should throw TypeError if the first argument is not an array', () => {
    expect(() => remove(null, 1)).toThrow(TypeError);
    expect(() => remove(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => remove(123, 1)).toThrow(TypeError);
    expect(() => remove('string', 1)).toThrow(TypeError);
    expect(() => remove({}, 1)).toThrow(TypeError);
  });

  test('should remove objects by reference, not by value for non-primitive types', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 1 };
    const array = [obj1, obj2, obj3];
    const removed = remove(array, obj1);

    expect(array).toEqual([obj2, obj3]); // obj3 (same content, different reference) remains
    expect(removed).toEqual([obj1]);
  });
});