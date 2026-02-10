import arrayDifferenceSimple from './array-difference-simple';

describe('arrayDifferenceSimple', () => {
  test('should return elements in arr1 that are not in arr2', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 6];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 2, 5]);
  });

  test('should return an empty array if all elements of arr1 are in arr2', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4, 5];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([]);
  });

  test('should return arr1 if arr2 is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('should return an empty array if arr1 is empty', () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([]);
  });

  test('should handle arrays with duplicate elements in arr1', () => {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 3, 4]);
  });

  test('should handle arrays with duplicate elements in arr2', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 2];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, 3]);
  });

  test('should handle different data types', () => {
    const arr1 = [1, 'a', true, null];
    const arr2 = ['a', false, null, 2];
    expect(arrayDifferenceSimple(arr1, arr2)).toEqual([1, true]);
  });
});