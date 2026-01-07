const { differenceWith } = require('./array-difference-with-utils');

describe('differenceWith', () => {
  const comparator = (a, b) => a.x === b.x && a.y === b.y;

  test('should return the difference of two arrays with a custom comparator', () => {
    const array = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
    const values = [{ x: 1, y: 2 }];
    expect(differenceWith(array, values, comparator)).toEqual([{ x: 2, y: 1 }]);
  });

  test('should return an empty array if all elements are removed', () => {
    const array = [{ x: 1, y: 2 }];
    const values = [{ x: 1, y: 2 }];
    expect(differenceWith(array, values, comparator)).toEqual([]);
  });

  test('should return the original array if no elements are removed', () => {
    const array = [{ x: 1, y: 2 }];
    const values = [{ x: 3, y: 4 }];
    expect(differenceWith(array, values, comparator)).toEqual([{ x: 1, y: 2 }]);
  });

  test('should handle empty arrays gracefully', () => {
    expect(differenceWith([], [{ x: 1 }], comparator)).toEqual([]);
    expect(differenceWith([{ x: 1 }], [], comparator)).toEqual([{ x: 1 }]);
    expect(differenceWith([], [], comparator)).toEqual([]);
  });

  test('should throw an error if comparator is not a function', () => {
    const array = [{ x: 1 }];
    const values = [{ x: 2 }];
    expect(() => differenceWith(array, values, null)).toThrow('Comparator function must be provided.');
    expect(() => differenceWith(array, values, undefined)).toThrow('Comparator function must be provided.');
  });

  test('should return a new array instance', () => {
    const array = [{ x: 1 }];
    const values = [];
    const result = differenceWith(array, values, comparator);
    expect(result).toEqual(array);
    expect(result).not.toBe(array);
  });

  test('should handle non-array inputs for array, returning an empty array', () => {
    const values = [{ x: 1 }];
    expect(differenceWith(null, values, comparator)).toEqual([]);
    expect(differenceWith(undefined, values, comparator)).toEqual([]);
    expect(differenceWith({}, values, comparator)).toEqual([]);
  });

  test('should handle non-array inputs for values, returning a copy of array', () => {
    const array = [{ x: 1 }];
    expect(differenceWith(array, null, comparator)).toEqual([{ x: 1 }]);
    expect(differenceWith(array, undefined, comparator)).toEqual([{ x: 1 }]);
    expect(differenceWith(array, {}, comparator)).toEqual([{ x: 1 }]);
  });
});
