const { uniqBy } = require('./array-unique-selector');

describe('uniqBy', () => {
  it('should return a duplicate-free array based on a property key', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    expect(uniqBy(arr, 'id')).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  it('should return a duplicate-free array based on an iteratee function', () => {
    const arr = [1.2, 1.5, 2.1, 2.9];
    expect(uniqBy(arr, Math.floor)).toEqual([1.2, 2.1]);
  });

  it('should handle an empty array', () => {
    expect(uniqBy([], 'id')).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(uniqBy(arr, 'id')).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should handle primitive arrays (acting like `uniq` if iteratee is identity)', () => {
    const arr = [1, 2, 2, 3, 1];
    expect(uniqBy(arr, (x) => x)).toEqual([1, 2, 3]);
  });
});
