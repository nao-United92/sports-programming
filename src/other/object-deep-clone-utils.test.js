const { deepClone } = require('./object-deep-clone-utils.js');

describe('deepClone', () => {
  it('should deep clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  it('should deep clone an array', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  it('should handle null and primitive values', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
  });

  it('should handle dates', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned.getTime()).toEqual(date.getTime());
    expect(cloned).not.toBe(date);
  });

  it('should handle complex nested objects', () => {
    const obj = {
      a: { b: { c: [1, 2, { d: 'hello' }] } },
      e: new Date(),
      f: null,
    };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a.b).not.toBe(obj.a.b);
    expect(cloned.a.b.c).not.toBe(obj.a.b.c);
    expect(cloned.a.b.c[2]).not.toBe(obj.a.b.c[2]);
    expect(cloned.e).not.toBe(obj.e);
  });
});
