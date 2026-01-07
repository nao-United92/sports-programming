const { intersectionBy } = require('./array-intersection-by-utils');

describe('intersectionBy', () => {
  test('should return the intersection of two arrays based on an iteratee function', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    expect(intersectionBy(arr1, arr2, o => o.x)).toEqual([{ x: 2 }]);
  });

  test('should return the intersection of multiple arrays based on a property name iteratee', () => {
    const arr1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const arr2 = [{ x: 2 }, { x: 3 }, { x: 4 }];
    const arr3 = [{ x: 3 }, { x: 4 }, { x: 5 }];
    expect(intersectionBy(arr1, arr2, arr3, 'x')).toEqual([{ x: 3 }]);
  });

  test('should return an empty array if there is no intersection', () => {
    const arr1 = [{ x: 1 }];
    const arr2 = [{ x: 2 }];
    const arr3 = [{ x: 3 }];
    expect(intersectionBy(arr1, arr2, arr3, 'x')).toEqual([]);
  });

  test('should work with primitive values and an iteratee', () => {
    const arr1 = [1.2, 2.3];
    const arr2 = [1.8, 3.4];
    const arr3 = [1.1, 4.5];
    expect(intersectionBy(arr1, arr2, arr3, Math.floor)).toEqual([1.2]);
  });
  
  test('should handle empty arrays', () => {
    const arr1 = [{ x: 1 }];
    const arr2 = [];
    expect(intersectionBy(arr1, arr2, 'x')).toEqual([]);
    expect(intersectionBy([], [{ x: 1 }], 'x')).toEqual([]);
  });

  test('should return a copy of the single array if only one is provided', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const result = intersectionBy(arr1, 'x');
    expect(result).toEqual(arr1);
    expect(result).not.toBe(arr1); // Ensure it's a copy
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(intersectionBy('x')).toEqual([]);
    expect(intersectionBy(o => o.x)).toEqual([]);
  });
  
  test('should preserve duplicates from the first array if they are part of the intersection', () => {
    const arr1 = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const arr2 = [{ id: 1 }, { id: 3 }];
    expect(intersectionBy(arr1, arr2, 'id')).toEqual([{ id: 1 }, { id: 1 }]);
  });
});
