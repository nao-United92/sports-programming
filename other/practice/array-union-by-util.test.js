const unionBy = require('./array-union-by-util');

describe('unionBy', () => {
  it('should unite arrays of objects based on a function', () => {
    const arr1 = [{ id: 1, val: 'a' }, { id: 2, val: 'b' }];
    const arr2 = [{ id: 2, val: 'c' }, { id: 3, val: 'd' }];
    const result = unionBy(arr1, arr2, o => o.id);
    expect(result).toEqual([{ id: 1, val: 'a' }, { id: 2, val: 'b' }, { id: 3, val: 'd' }]);
  });

  it('should work with a different function', () => {
    const arr1 = [{ n: 2.1 }, { n: 1.2 }];
    const arr2 = [{ n: 2.3 }, { n: 3.4 }];
    const result = unionBy(arr1, arr2, o => Math.floor(o.n));
    expect(result).toEqual([{ n: 2.1 }, { n: 1.2 }, { n: 3.4 }]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [{ id: 1 }];
    expect(unionBy(arr1, [], o => o.id)).toEqual(arr1);
    expect(unionBy([], arr1, o => o.id)).toEqual(arr1);
    expect(unionBy([], [], o => o.id)).toEqual([]);
  });

  it('should not modify the original arrays', () => {
    const arr1 = [{ id: 1 }];
    const arr2 = [{ id: 2 }];
    unionBy(arr1, arr2, o => o.id);
    expect(arr1).toEqual([{ id: 1 }]);
    expect(arr2).toEqual([{ id: 2 }]);
  });
});
