const { xorWith } = require('./array-xor-with-utils');

describe('xorWith', () => {
  test('should return the symmetric difference of two arrays with a custom comparator', () => {
    const arr1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const arr2 = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
    const comparator = (a, b) => a.x === b.x && a.y === b.y;
    expect(xorWith([arr1, arr2], comparator)).toEqual([{ x: 2, y: 1 }, { x: 3, y: 4 }]);
  });

  test('should return an empty array if all elements are the same', () => {
    const arr1 = [{ x: 1, y: 2 }];
    const arr2 = [{ x: 1, y: 2 }];
    const comparator = (a, b) => a.x === b.x;
    expect(xorWith([arr1, arr2], comparator)).toEqual([]);
  });

  test('should handle more than two arrays', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    const arr3 = [{ x: 3 }, { x: 4 }];
    const comparator = (a, b) => a.x === b.x;
    expect(xorWith([arr1, arr2, arr3], comparator)).toEqual([{ x: 1 }, { x: 4 }]);
  });

  test('should return a combined array if there are no common elements', () => {
    const arr1 = [{ x: 1 }];
    const arr2 = [{ x: 2 }];
    const comparator = (a, b) => a.x === b.x;
    expect(xorWith([arr1, arr2], comparator)).toEqual([{ x: 1 }, { x: 2 }]);
  });

  test('should return an empty array for empty input', () => {
    expect(xorWith([], (a, b) => a === b)).toEqual([]);
  });

  test('should throw an error if comparator is not a function', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(() => xorWith([arr1, arr2], null)).toThrow('Comparator must be a function.');
  });
});
