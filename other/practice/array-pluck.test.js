import pluck from './array-pluck';

describe('pluck', () => {
  it('should return an array of values for the given key', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(pluck(arr, 'a')).toEqual([1, 2, 3]);
  });

  it('should return an array of undefined for a key that does not exist', () => {
    const arr = [{ a: 1 }, { a: 2 }, { b: 3 }];
    expect(pluck(arr, 'b')).toEqual([undefined, undefined, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(pluck(arr, 'a')).toEqual([]);
  });

  it('should work with different keys', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }];
    expect(pluck(arr, 'name')).toEqual(['Alice', 'Bob']);
  });
});
