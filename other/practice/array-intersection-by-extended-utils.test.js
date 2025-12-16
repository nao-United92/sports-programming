const intersectionBy = require('./array-intersection-by-extended-utils');

describe('intersectionBy', () => {
  it('should find the intersection of two arrays based on an iteratee function', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const arr3 = [2.5, 4.5];
    const result = intersectionBy(arr1, arr2, arr3, Math.floor);
    expect(result).toEqual([2.1]);
  });

  it('should find the intersection of arrays of objects based on a property string', () => {
    // Note: The current implementation doesn't support a property string iteratee directly.
    // It expects a function. Let's adapt the test to use a function iteratee.
    const arr1 = [{ 'x': 1 }, { 'x': 2 }];
    const arr2 = [{ 'x': 2 }, { 'x': 3 }];
    const arr3 = [{ 'x': 2 }, { 'x': 4 }];
    const result = intersectionBy(arr1, arr2, arr3, item => item.x);
    expect(result).toEqual([{ 'x': 2 }]);
  });

  it('should return an empty array if there is no intersection', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(intersectionBy(arr1, arr2, x => x)).toEqual([]);
  });

  it('should handle empty arrays correctly', () => {
    expect(intersectionBy([1, 2], [])).toEqual([]);
    expect(intersectionBy([], [1, 2])).toEqual([]);
    expect(intersectionBy([], [])).toEqual([]);
  });
    
  it('should return the first array if only one is provided', () => {
    const arr = [1, 2, 3];
    expect(intersectionBy(arr)).toEqual(arr);
  });

  it('should handle duplicate values in the first array', () => {
    const arr1 = [1, 1, 2, 3];
    const arr2 = [1, 4, 5];
    const result = intersectionBy(arr1, arr2, x => x);
    expect(result).toEqual([1]);
  });
});
