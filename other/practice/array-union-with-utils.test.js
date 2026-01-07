const { unionWith } = require('./array-union-with-utils');

describe('unionWith', () => {
  const comparator = (a, b) => a.x === b.x;

  test('should return the union of two arrays based on a comparator', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    expect(unionWith(arr1, arr2, comparator)).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
  });

  test('should return the union of three arrays', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    const arr3 = [{ x: 3 }, { x: 4 }];
    expect(unionWith(arr1, arr2, arr3, comparator)).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [{ x: 1 }];
    const arr2 = [];
    const arr3 = [{ x: 2 }];
    expect(unionWith(arr1, arr2, arr3, comparator)).toEqual([{ x: 1 }, { x: 2 }]);
  });

  test('should return a single array if only one is provided', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    expect(unionWith(arr1, comparator)).toEqual(arr1);
  });

  test('should throw an error if the last argument is not a comparator function', () => {
    const arr1 = [{ x: 1 }];
    expect(() => unionWith(arr1, {})).toThrow('The last argument must be a comparator function.');
  });

  test('should produce a union of arrays with different object structures', () => {
    const arr1 = [{ id: 1, val: 'a' }];
    const arr2 = [{ id: 2, val: 'b' }];
    const arr3 = [{ id: 1, val: 'c' }];
    const idComparator = (a, b) => a.id === b.id;
    expect(unionWith(arr1, arr2, arr3, idComparator)).toEqual([{ id: 1, val: 'a' }, { id: 2, val: 'b' }]);
  });
});
