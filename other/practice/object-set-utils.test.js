const { set } = require('./object-set-utils');

describe('set', () => {
  let obj;
  beforeEach(() => {
    obj = {};
  });

  it('should set a value using a string path', () => {
    set(obj, 'a.b.c', 1);
    expect(obj.a.b.c).toBe(1);
  });

  it('should set a value using an array path', () => {
    set(obj, ['a', 'b', 'c'], 2);
    expect(obj.a.b.c).toBe(2);
  });

  it('should create nested objects if they do not exist', () => {
    set(obj, 'x.y.z', 'hello');
    expect(obj).toEqual({ x: { y: { z: 'hello' } } });
  });

  it('should create arrays for numeric keys', () => {
    set(obj, 'a[0].b', 'value');
    expect(obj.a[0].b).toBe('value');
    expect(Array.isArray(obj.a)).toBe(true);
  });
  
  it('should not overwrite existing objects', () => {
    const initial = { a: { existing: 'value' } };
    set(initial, 'a.b', 123);
    expect(initial.a.existing).toBe('value');
    expect(initial.a.b).toBe(123);
  });
  
  it('should modify the original object', () => {
    const original = {a: 1};
    const result = set(original, 'b', 2);
    expect(original.b).toBe(2);
    expect(result).toBe(original);
  });
});