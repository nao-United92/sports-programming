import { deepClone } from './object-deep-clone-utils';

describe('deepClone', () => {
  test('should return the same value for primitives', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should clone a flat object', () => {
    const obj = { a: 1, b: 'test' };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('should clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  test('should clone an array', () => {
    const arr = [1, 2, [3, 4]];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  test('should clone an object with arrays', () => {
    const obj = { a: [1, 2], b: { c: [3, 4] } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.b.c).not.toBe(obj.b.c);
  });

  test('should handle Dates', () => {
    const date = new Date();
    const cloned = deepClone({ d: date });
    expect(cloned.d.getTime()).toBe(date.getTime());
    expect(cloned.d).not.toBe(date);
  });
});
