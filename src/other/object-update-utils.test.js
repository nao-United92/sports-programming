const update = require('./object-update-utils');

describe('update', () => {
  const obj = {
    a: {
      b: 5,
      c: [1, 2],
    },
    d: null
  };

  test('should update a nested number property', () => {
    const increment = (n) => (n || 0) + 1;
    const newObj = update(obj, 'a.b', increment);
    expect(newObj.a.b).toBe(6);
    expect(obj.a.b).toBe(5); // Original is unchanged
  });

  test('should update a nested array property', () => {
    const append = (arr) => [...(arr || []), 3];
    const newObj = update(obj, 'a.c', append);
    expect(newObj.a.c).toEqual([1, 2, 3]);
    expect(obj.a.c).toEqual([1, 2]); // Original is unchanged
  });

  test('should work on a path that does not exist', () => {
    const square = (n) => (n === undefined ? 1 : n * n);
    const newObj = update(obj, 'x.y.z', square);
    expect(newObj.x.y.z).toBe(1);
    expect(obj.x).toBe(undefined); // Original is unchanged
  });
  
  test('should pass undefined to the updater for non-existent paths', () => {
    const updater = jest.fn(val => (val === undefined ? 'created' : 'updated'));
    const newObj = update(obj, 'non.existent', updater);
    expect(updater).toHaveBeenCalledWith(undefined);
    expect(newObj.non.existent).toBe('created');
  });

  test('should pass null to the updater for null paths', () => {
    const updater = jest.fn(val => (val === null ? 'was-null' : 'updated'));
    const newObj = update(obj, 'd', updater);
    expect(updater).toHaveBeenCalledWith(null);
    expect(newObj.d).toBe('was-null');
  });

  test('should not mutate the original object', () => {
    const newObj = update(obj, 'a.b', n => n + 1);
    expect(newObj).not.toBe(obj);
    expect(newObj.a).not.toBe(obj.a); // Path 'a' should be a copy
    expect(newObj.a.c).toBe(obj.a.c); // Sibling path 'a.c' should be the same reference
  });
  
  test('should handle array paths', () => {
    const append = (arr) => [...arr, 'new'];
    const newObj = update(obj, ['a', 'c'], append);
    expect(newObj.a.c).toEqual([1, 2, 'new']);
    expect(obj.a.c).toEqual([1, 2]);
  });
});
