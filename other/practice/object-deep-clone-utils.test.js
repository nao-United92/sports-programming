const { deepClone } = require('./object-deep-clone-utils.js');

describe('deepClone', () => {
  it('should create a deep clone of a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.b).not.toBe(obj.b);
    expect(clone.b.d).not.toBe(obj.b.d);
  });

  it('should create a deep clone of an array of objects', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const clone = deepClone(arr);
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
    expect(clone[0]).not.toBe(arr[0]);
  });

  it('should handle primitive values', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('should handle dates correctly', () => {
    const obj = { d: new Date() };
    const clone = deepClone(obj);
    // JSON.stringify converts dates to ISO strings
    expect(clone.d).toBe(obj.d.toISOString());
  });
});