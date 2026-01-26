const { deepClone } = require('./deep-cloner');

describe('deepClone', () => {
  test('should clone an object with nested properties', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  test('should clone an array with nested objects', () => {
    const arr = [1, { a: 2 }, [3, { b: 4 }]];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
    expect(cloned[2][1]).not.toBe(arr[2][1]);
  });

  test('should handle cyclic references', () => {
    const obj = { a: 1 };
    obj.b = obj;
    const cloned = deepClone(obj);
    expect(cloned.a).toBe(1);
    expect(cloned.b).toBe(cloned);
  });

  test('should clone dates', () => {
    const date = new Date();
    const cloned = deepClone({ date });
    expect(cloned.date.getTime()).toBe(date.getTime());
    expect(cloned.date).not.toBe(date);
  });

  test('should clone regular expressions', () => {
    const regex = /test/gi;
    const cloned = deepClone({ regex });
    expect(cloned.regex.toString()).toBe(regex.toString());
    expect(cloned.regex).not.toBe(regex);
  });

  test('should clone primitives', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('test')).toBe('test');
    expect(deepClone(null)).toBe(null);
  });
});
