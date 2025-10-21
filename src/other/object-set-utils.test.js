const { set } = require('./object-set-utils');

describe('set', () => {
  it('should set a top-level property', () => {
    const obj = { a: 1 };
    set(obj, 'b', 2);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  it('should set a nested property using a string path', () => {
    const obj = { a: { b: 1 } };
    set(obj, 'a.c', 2);
    expect(obj).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should set a nested property using an array path', () => {
    const obj = { a: { b: 1 } };
    set(obj, ['a', 'c'], 2);
    expect(obj).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should create intermediate objects if they do not exist', () => {
    const obj = {};
    set(obj, 'a.b.c', 1);
    expect(obj).toEqual({ a: { b: { c: 1 } } });
  });

  it('should create intermediate arrays if path suggests an array index', () => {
    const obj = {};
    set(obj, 'a.0.b', 1);
    expect(obj).toEqual({ a: [{ b: 1 }] });
  });

  it('should overwrite an existing property', () => {
    const obj = { a: { b: 1 } };
    set(obj, 'a.b', 2);
    expect(obj).toEqual({ a: { b: 2 } });
  });

  it('should handle setting a property on an array element', () => {
    const obj = { a: [{ b: 1 }] };
    set(obj, 'a.0.c', 2);
    expect(obj).toEqual({ a: [{ b: 1, c: 2 }] });
  });

  it('should return the original object', () => {
    const obj = {};
    const result = set(obj, 'a', 1);
    expect(result).toBe(obj);
  });

  it('should not modify non-object inputs', () => {
    let num = 1;
    set(num, 'a', 2);
    expect(num).toBe(1);

    let str = 'test';
    set(str, 'a', 2);
    expect(str).toBe('test');

    let bool = true;
    set(bool, 'a', 2);
    expect(bool).toBe(true);
  });

  it('should handle null or undefined initial object', () => {
    let obj = null;
    const result = set(obj, 'a', 1);
    expect(result).toBeNull();

    obj = undefined;
    const result2 = set(obj, 'a', 1);
    expect(result2).toBeUndefined();
  });

  it('should convert existing non-object intermediate values to objects/arrays', () => {
    const obj = { a: 1 };
    set(obj, 'a.b', 2);
    expect(obj).toEqual({ a: { b: 2 } });

    const obj2 = { a: 'string' };
    set(obj2, 'a.b', 2);
    expect(obj2).toEqual({ a: { b: 2 } });

    const obj3 = { a: null };
    set(obj3, 'a.b', 2);
    expect(obj3).toEqual({ a: { b: 2 } });
  });
});
