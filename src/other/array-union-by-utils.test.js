import { unionBy } from './array-union-by-utils.js';

describe('unionBy', () => {
  test('should return the union of two arrays based on a function', () => {
    const arr1 = [{ 'x': 1 }, { 'x': 2 }];
    const arr2 = [{ 'x': 2 }, { 'x': 3 }];
    const result = unionBy(arr1, arr2, o => o.x);
    expect(result).toEqual([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }]);
  });

  test('should work with Math.floor', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = unionBy(arr1, arr2, Math.floor);
    expect(result).toEqual([2.1, 1.2, 3.4]);
  });
});
