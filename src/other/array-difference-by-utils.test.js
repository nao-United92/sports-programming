import { differenceBy } from './array-difference-by-utils.js';

describe('differenceBy', () => {
  test('should return the difference of two arrays based on a function', () => {
    const arr1 = [{ 'x': 1 }, { 'x': 2 }];
    const arr2 = [{ 'x': 2 }, { 'x': 3 }];
    const result = differenceBy(arr1, arr2, o => o.x);
    expect(result).toEqual([{ 'x': 1 }]);
  });

  test('should work with Math.floor', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = differenceBy(arr1, arr2, Math.floor);
    expect(result).toEqual([1.2]);
  });

  test('should return the first array if there is no intersection', () => {
    const arr1 = [{ 'x': 1 }];
    const arr2 = [{ 'x': 3 }];
    const result = differenceBy(arr1, arr2, o => o.x);
    expect(result).toEqual([{ 'x': 1 }]);
  });
});
