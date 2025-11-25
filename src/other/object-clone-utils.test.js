const { deepClone } = require('./object-clone-utils');

describe('deepClone', () => {
  it('should clone primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should clone a simple object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should clone an object with an array', () => {
    const obj = { a: [1, 2, { b: 3 }] };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a[2]).not.toBe(obj.a[2]);
  });

  it('should handle circular references', () => {
    const obj = { a: 1 };
    obj.b = obj; // Circular reference
    const cloned = deepClone(obj);
    expect(cloned.a).toBe(1);
    expect(cloned.b).toBe(cloned);
  });

  it('should clone Date objects', () => {
    const obj = { d: new Date() };
    const cloned = deepClone(obj);
    expect(cloned.d).toEqual(obj.d);
    expect(cloned.d).not.toBe(obj.d);
  });

  it('should clone RegExp objects', () => {
    const obj = { r: /test/gi };
    const cloned = deepClone(obj);
    expect(cloned.r).toEqual(obj.r);
    expect(cloned.r).not.toBe(obj.r);
  });
});