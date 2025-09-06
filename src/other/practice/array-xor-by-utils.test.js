import { xorBy } from './array-xor-by-utils.js';

describe('xorBy', () => {
  test('should return the symmetric difference of two arrays based on a function', () => {
    const result = xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([1.2, 3.4]);
  });

  test('should return the symmetric difference of two arrays of objects based on a property', () => {
    const result = xorBy([{ 'x': 1 }, { 'x': 2 }], [{ 'x': 2 }, { 'x': 3 }], (obj) => obj.x);
    expect(result).toEqual([{ 'x': 1 }, { 'x': 3 }]);
  });

  test('should return an empty array if the arrays are identical', () => {
    const result = xorBy([1, 2, 3], [1, 2, 3], x => x);
    expect(result).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(xorBy([], [1, 2], x => x)).toEqual([1, 2]);
    expect(xorBy([1, 2], [], x => x)).toEqual([1, 2]);
    expect(xorBy([], [], x => x)).toEqual([]);
  });
});
