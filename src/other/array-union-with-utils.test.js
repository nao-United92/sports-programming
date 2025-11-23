import { unionWith } from './array-union-with-utils';

describe('unionWith', () => {
  it('should return the union of two arrays of objects based on a custom comparator', () => {
    const arr1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const arr2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
    const comparator = (a, b) => a.x === b.x && a.y === b.y;
    expect(unionWith(arr1, arr2, comparator)).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }]);
  });

  it('should work with a comparator for floating point numbers', () => {
    const arr1 = [1.2, 2.3];
    const arr2 = [1.9, 3.1];
    const comparator = (a, b) => Math.floor(a) === Math.floor(b);
    // 1.2 (floor 1) is unique
    // 2.3 (floor 2) is unique
    // 1.9 (floor 1) is a duplicate of 1.2
    // 3.1 (floor 3) is unique
    expect(unionWith(arr1, arr2, comparator)).toEqual([1.2, 2.3, 3.1]);
  });

  it('should return a combined array if there are no common elements according to the comparator', () => {
    const arr1 = [{ id: 1 }];
    const arr2 = [{ id: 2 }];
    const comparator = (a, b) => a.id === b.id;
    expect(unionWith(arr1, arr2, comparator)).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [{ id: 1 }];
    const comparator = (a, b) => a.id === b.id;
    expect(unionWith(arr1, [], comparator)).toEqual([{ id: 1 }]);
    expect(unionWith([], arr1, comparator)).toEqual([{ id: 1 }]);
  });

  it('should handle non-array or invalid inputs gracefully', () => {
    const comparator = (a, b) => a === b;
    expect(unionWith(null, [1, 2], comparator)).toEqual([1, 2]);
    expect(unionWith([1, 2], undefined, comparator)).toEqual([1, 2]);
    expect(unionWith({}, 'test', comparator)).toEqual([]);
    expect(unionWith([1, 2], [3, 4], null)).toEqual([1, 2]);
  });

  it('should produce a union of unique values from the original arrays', () => {
    const arr1 = [1, 2, 3, 3];
    const arr2 = [2, 3, 4, 4];
    const comparator = (a, b) => a === b;
    expect(unionWith(arr1, arr2, comparator)).toEqual([1, 2, 3, 4]);
  });
});
