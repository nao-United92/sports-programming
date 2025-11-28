const { set } = require('./object-set-utils');

describe('set', () => {
  let originalObj;

  beforeEach(() => {
    originalObj = {
      a: {
        b: {
          c: 'old value',
        },
      },
    };
  });

  test('should not mutate the original object', () => {
    const newObj = set(originalObj, 'a.b.c', 'new value');
    expect(originalObj.a.b.c).toBe('old value');
    expect(newObj.a.b.c).toBe('new value');
  });

  test('should set a value on a new deep path in an empty object', () => {
    const newObj = set({}, 'a.b.c', 'new value');
    expect(newObj).toEqual({ a: { b: { c: 'new value' } } });
  });

  test('should overwrite an existing value', () => {
    const newObj = set(originalObj, 'a.b.c', 'overwritten');
    expect(newObj.a.b.c).toBe('overwritten');
  });

  test('should create nested arrays and objects', () => {
    const newObj = set({}, 'a[0].b.c', 'nested array value');
    expect(newObj).toEqual({ a: [{ b: { c: 'nested array value' } }] });
  });

  test('should set a value in an existing array', () => {
    const objWithArray = { a: ['item1', 'item2'] };
    const newObj = set(objWithArray, 'a[1]', 'new item');
    expect(newObj.a).toEqual(['item1', 'new item']);
  });

  test('should handle an array path', () => {
    const newObj = set({}, ['a', '0', 'b'], 'array path value');
    expect(newObj).toEqual({ a: [{ b: 'array path value' }] });
  });

  test('should return non-objects as-is', () => {
    expect(set(null, 'a.b', 'value')).toBeNull();
    expect(set(undefined, 'a.b', 'value')).toBeUndefined();
    expect(set(42, 'a.b', 'value')).toBe(42);
  });

  test('should overwrite a non-object value in the path', () => {
    const objWithPrimitive = { a: { b: 123 } };
    const newObj = set(objWithPrimitive, 'a.b.c', 'new value');
    expect(newObj).toEqual({ a: { b: { c: 'new value' } } });
  });
});