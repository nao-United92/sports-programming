import pullAt from './array-pull-at-utils';

describe('pullAt', () => {
  test('should remove elements at specified indexes and return them', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const pulled = pullAt(array, [1, 3]);
    expect(pulled).toEqual(['b', 'd']);
    expect(array).toEqual(['a', 'c', 'e']);
  });

  test('should modify the original array', () => {
    const array = [1, 2, 3, 4];
    pullAt(array, [0]);
    expect(array).toEqual([2, 3, 4]);
  });

  test('should handle duplicate indexes by only pulling once', () => {
    const array = [1, 2, 3, 4];
    const pulled = pullAt(array, [1, 1]); // Try to pull element at index 1 twice
    expect(pulled).toEqual([2]); // Only '2' should be pulled once
    expect(array).toEqual([1, 3, 4]);
  });

  test('should return an empty array if no valid indexes are provided', () => {
    const array = [1, 2, 3];
    const pulled = pullAt(array, []);
    expect(pulled).toEqual([]);
    expect(array).toEqual([1, 2, 3]); // Original array should remain unchanged
  });

  test('should handle out-of-bounds indexes gracefully (ignore them)', () => {
    const array = [1, 2, 3];
    const pulled = pullAt(array, [-1, 1, 99]);
    expect(pulled).toEqual([2]);
    expect(array).toEqual([1, 3]);
  });

  test('should return elements in the order they appeared in the original array', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const pulled = pullAt(array, [3, 1]); // Provide indexes in non-sorted order
    expect(pulled).toEqual(['b', 'd']);
    expect(array).toEqual(['a', 'c', 'e']);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => pullAt(null, [0])).toThrow(TypeError);
    expect(() => pullAt(undefined, [0])).toThrow(TypeError);
    expect(() => pullAt({}, [0])).toThrow(TypeError);
  });

  test('should throw TypeError if indexes argument is not an array', () => {
    const array = [1, 2, 3];
    expect(() => pullAt(array, null)).toThrow(TypeError);
    expect(() => pullAt(array, 0)).toThrow(TypeError);
    expect(() => pullAt(array, '1')).toThrow(TypeError);
  });

  test('should work correctly when pulling multiple adjacent elements', () => {
    const array = [1, 2, 3, 4, 5];
    const pulled = pullAt(array, [1, 2]); // Pull '2' and '3'
    expect(pulled).toEqual([2, 3]);
    expect(array).toEqual([1, 4, 5]);
  });
});