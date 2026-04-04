const deepClone = require('./nebula-object-deep-clone');

describe('nebula-object-deep-clone', () => {
  test('should clone simple objects', () => {
    const obj = { a: 1, b: 2 };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone nested objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  test('should clone arrays', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  test('should clone Dates', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  test('should clone RegExps', () => {
    const regex = /abc/gi;
    const cloned = deepClone(regex);
    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex);
  });

  test('should handle null and primitives', () => {
    expect(deepClone(null)).toBe(null);
    expect(deepClone(123)).toBe(123);
    expect(deepClone('abc')).toBe('abc');
  });
});
