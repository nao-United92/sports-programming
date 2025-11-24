import { deepClone } from './object-utils';

describe('deepClone', () => {
  test('should deep clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.b).not.toBe(obj.b);
  });

  test('should deep clone an array', () => {
    const arr = [1, [2, 3]];
    const clone = deepClone(arr);
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
    expect(clone[1]).not.toBe(arr[1]);
  });

  test('should handle null and primitives', () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
  });

  test('should handle dates', () => {
      const date = new Date();
      const clone = deepClone({ d: date });
      expect(clone.d.getTime()).toBe(date.getTime());
      expect(clone.d).not.toBe(date);
  });
});