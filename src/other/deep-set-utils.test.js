const { deepSet } = require('./deep-set-utils.js');

describe('deepSet', () => {
  it('should set a value on a new deep path', () => {
    const obj = { a: { b: 2 } };
    const newObj = deepSet(obj, 'a.c.d', 5);
    expect(newObj.a.c.d).toBe(5);
  });

  it('should not mutate the original object', () => {
    const obj = { a: 1 };
    deepSet(obj, 'b', 2);
    expect(obj.b).toBeUndefined();
  });

  it('should overwrite an existing value', () => {
    const obj = { a: { b: 2 } };
    const newObj = deepSet(obj, 'a.b', 3);
    expect(newObj.a.b).toBe(3);
  });

  it('should create arrays for numeric path segments', () => {
    const obj = {};
    const newObj = deepSet(obj, 'a.0.b', 'hello');
    expect(Array.isArray(newObj.a)).toBe(true);
    expect(newObj.a[0].b).toBe('hello');
  });

  it('should handle an array path', () => {
    const obj = {};
    const newObj = deepSet(obj, ['a', '0', 'b'], 'world');
    expect(Array.isArray(newObj.a)).toBe(true);
    expect(newObj.a[0].b).toBe('world');
  });

  it('should return the object if path is empty', () => {
    const obj = { a: 1 };
    const newObj = deepSet(obj, [], 100);
    expect(newObj).toEqual(obj);
  });

  it('should set a value on the root', () => {
    const obj = { a: 1 };
    const newObj = deepSet(obj, 'b', 2);
    expect(newObj.b).toBe(2);
  });
});
