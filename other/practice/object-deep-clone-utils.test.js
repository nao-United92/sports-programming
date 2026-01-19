const { deepClone } = require('./object-deep-clone-utils');

describe('deepClone', () => {
  it('should clone an object with nested properties', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should clone an array with nested objects', () => {
    const arr = [{ a: 1 }, { b: { c: 2 } }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[1].b).not.toBe(arr[1].b);
  });

  it('should handle null and primitive values', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
  });

  it('should handle dates', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned.getTime()).toBe(date.getTime());
    expect(cloned).not.toBe(date);
  });
});
