import { unionBy } from './array-union-by-utils.js';

describe('unionBy', () => {
  test('should return the union of two arrays based on a function', () => {
    const result = unionBy([2.1], [1.2, 2.3], Math.floor);
    expect(result).toEqual([2.1, 1.2]);
  });

  test('should return the union of two arrays of objects based on a property', () => {
    const result = unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], (obj) => obj.x);
    expect(result).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  test('should return the combined array if there are no duplicates', () => {
    const result = unionBy([1, 2], [3, 4], x => x);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty arrays', () => {
    expect(unionBy([], [1, 2], x => x)).toEqual([1, 2]);
    expect(unionBy([1, 2], [], x => x)).toEqual([1, 2]);
    expect(unionBy([], [], x => x)).toEqual([]);
  });
});
