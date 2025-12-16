const uniqBy = require('./array-uniq-by-utils');

describe('uniqBy', () => {
  it('should return a new array with unique elements based on a given iteratee function', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    const result = uniqBy(arr, (item) => item.id);
    expect(result).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  it('should work with an iteratee string for object properties', () => {
    const arr = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }];
    const result = uniqBy(arr, 'x');
    expect(result).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(uniqBy(null, 'x')).toEqual([]);
    expect(uniqBy(undefined, 'x')).toEqual([]);
    expect(uniqBy({}, 'x')).toEqual([]);
  });

  it('should handle an array with mixed type elements', () => {
    const arr = [2.1, 1.2, 2.3, 3.4, 2.5];
    const result = uniqBy(arr, Math.floor);
    expect(result).toEqual([2.1, 1.2, 3.4]);
  });

  it('should return the original array if all elements are unique by the iteratee', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = uniqBy(arr, 'id');
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
});
