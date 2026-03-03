const deepClone = require('./object-deep-clone');

describe('object-deep-clone', () => {
  test('clones a simple object', () => {
    const obj = { a: 1, b: 2 };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  test('clones a nested object', () => {
    const obj = { a: 1, b: { c: 3 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.b).not.toBe(obj.b);
  });

  test('clones an array', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const clone = deepClone(arr);
    expect(clone).toEqual(arr);
    expect(clone[1]).not.toBe(arr[1]);
    expect(clone[2]).not.toBe(arr[2]);
  });

  test('handles null and primitives', () => {
    expect(deepClone(null)).toBe(null);
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
  });
});
