import { intersectionWith } from './array-intersection-with-utils';

describe('intersectionWith', () => {
  it('should return the intersection of two arrays of objects based on a custom comparator', () => {
    const arr1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const arr2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
    const comparator = (a, b) => a.x === b.x && a.y === b.y;
    expect(intersectionWith(arr1, arr2, comparator)).toEqual([{ x: 1, y: 2 }]);
  });

  it('should work with a comparator for floating point numbers', () => {
    const arr1 = [1.2, 2.3, 3.4];
    const arr2 = [1.9, 2.3, 4.5];
    const comparator = (a, b) => Math.round(a) === Math.round(b);
    // 1.2 -> 1, 1.9 -> 2 (no match)
    // 2.3 -> 2, 2.3 -> 2 (match)
    expect(intersectionWith(arr1, arr2, comparator)).toEqual([2.3]);
  });

  it('should return an empty array if there are no common elements', () => {
    const arr1 = [{ id: 1 }, { id: 2 }];
    const arr2 = [{ id: 3 }, { id: 4 }];
    const comparator = (a, b) => a.id === b.id;
    expect(intersectionWith(arr1, arr2, comparator)).toEqual([]);
  });

  it('should return an empty array if one of the arrays is empty', () => {
    const arr1 = [{ id: 1 }];
    const arr2 = [];
    const comparator = (a, b) => a.id === b.id;
    expect(intersectionWith(arr1, arr2, comparator)).toEqual([]);
    expect(intersectionWith([], arr1, comparator)).toEqual([]);
  });

  it('should handle non-array or invalid inputs gracefully', () => {
    const comparator = (a, b) => a === b;
    expect(intersectionWith(null, [1, 2], comparator)).toEqual([]);
    expect(intersectionWith([1, 2], undefined, comparator)).toEqual([]);
    expect(intersectionWith({}, 'test', comparator)).toEqual([]);
    expect(intersectionWith([1, 2], [3, 4], null)).toEqual([]);
  });

  it('should return unique intersecting values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 2, 3, 4];
    const comparator = (a, b) => a === b;
    expect(intersectionWith(arr1, arr2, comparator)).toEqual([2, 3]);
  });
});
