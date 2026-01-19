const { set } = require('./object-set-utils');

describe('set', () => {
  it('should set a value at a specified string path', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 2);
    expect(obj.a.b.c).toBe(2);
  });

  it('should set a value at a specified array path', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, ['a', 'b', 'c'], 3);
    expect(obj.a.b.c).toBe(3);
  });

  it('should create nested objects if they do not exist', () => {
    const obj = {};
    set(obj, 'a.b.c', 10);
    expect(obj.a.b.c).toBe(10);
  });

  it('should handle setting a value at the root level', () => {
    const obj = {};
    set(obj, 'key', 'value');
    expect(obj.key).toBe('value');
  });

  it('should overwrite existing values', () => {
    const obj = { a: { b: { c: 1 } } };
    set(obj, 'a.b.c', 'new value');
    expect(obj.a.b.c).toBe('new value');
  });

  it('should return the modified object', () => {
    const obj = { a: { b: { c: 1 } } };
    const result = set(obj, 'a.b.c', 5);
    expect(result).toBe(obj);
    expect(result.a.b.c).toBe(5);
  });
});
