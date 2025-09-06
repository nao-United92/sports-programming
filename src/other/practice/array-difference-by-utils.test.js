import { differenceBy } from './array-difference-by-utils.js';

describe('differenceBy', () => {
  test('should return the difference of two arrays based on a function', () => {
    const result = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([1.2]);
  });

  test('should return the difference of two arrays of objects based on a property', () => {
    const result = differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], (obj) => obj.x);
    expect(result).toEqual([{ 'x': 2 }]);
  });

  test('should return an empty array if there is no difference', () => {
    const result = differenceBy([1, 2, 3], [1, 2, 3], x => x);
    expect(result).toEqual([]);
  });

  test('should return the first array if the second array is empty', () => {
    const result = differenceBy([1, 2, 3], [], x => x);
    expect(result).toEqual([1, 2, 3]);
  });
});
