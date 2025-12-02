import { get, set } from './object-path-utils';

describe('get', () => {
  const obj = { a: { b: [{ c: 1 }, { d: 2 }] }, e: null };

  test('should get a top-level property', () => {
    expect(get(obj, 'e')).toBeNull();
  });

  test('should get a deeply nested property', () => {
    expect(get(obj, 'a.b[0].c')).toBe(1);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b[2].f')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(obj, 'x.y.z', 'default')).toBe('default');
  });

  test('should return the default value when path resolves to undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  test('should handle array path', () => {
    expect(get(obj, ['a', 'b', '1', 'd'])).toBe(2);
  });
});

describe('set', () => {
  let obj;

  beforeEach(() => {
    obj = { a: { b: 1 } };
  });

  test('should set a top-level property', () => {
    set(obj, 'c', 3);
    expect(obj.c).toBe(3);
  });

  test('should set a deeply nested property on an existing path', () => {
    set(obj, 'a.b', 2);
    expect(obj.a.b).toBe(2);
  });

  test('should create nested objects if path does not exist', () => {
    set(obj, 'x.y.z', 'new');
    expect(obj.x.y.z).toBe('new');
  });

  test('should create nested arrays and objects for index paths', () => {
    const newObj = {};
    set(newObj, 'a[0].b.c', 'value');
    expect(newObj.a[0].b.c).toBe('value');
    expect(Array.isArray(newObj.a)).toBe(true);
  });

  test('should overwrite an existing value', () => {
    set(obj, 'a', { new: 'object' });
    expect(obj.a).toEqual({ new: 'object' });
  });

  test('should handle array path', () => {
    set(obj, ['x', 'y', '0'], 'arrayValue');
    expect(obj.x.y[0]).toBe('arrayValue');
  });
});
