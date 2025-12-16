const uniqWith = require('./array-uniq-with-utils');

describe('uniqWith', () => {
  it('should return a new array with unique elements based on a custom comparator function', () => {
    const arr = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }];
    const comparator = (a, b) => a.x === b.x;
    const result = uniqWith(arr, comparator);
    expect(result).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }]);
  });

  it('should handle complex objects', () => {
    const objects = [
      { id: 1, data: { value: 'a' } },
      { id: 2, data: { value: 'b' } },
      { id: 1, data: { value: 'c' } }
    ];
    const result = uniqWith(objects, (a, b) => a.id === b.id);
    expect(result).toEqual([
      { id: 1, data: { value: 'a' } },
      { id: 2, data: { value: 'b' } }
    ]);
  });

  it('should return an empty array if the input is not an array', () => {
    const comparator = (a, b) => a === b;
    expect(uniqWith(null, comparator)).toEqual([]);
    expect(uniqWith(undefined, comparator)).toEqual([]);
    expect(uniqWith({}, comparator)).toEqual([]);
  });

  it('should return an empty array if comparator is not a function', () => {
    const arr = [1, 2, 1, 3];
    expect(uniqWith(arr, null)).toEqual([]);
    expect(uniqWith(arr, 'not-a-function')).toEqual([]);
  });

  it('should return the original array if all elements are unique by the comparator', () => {
    const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const comparator = (a, b) => a.x === b.x;
    const result = uniqWith(arr, comparator);
    expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
  });
});
