import { deepClone } from './object-deep-cloner.js';

describe('deepClone', () => {
  test('should clone an object with nested properties', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });

  test('should clone an object with an array', () => {
    const original = { a: [1, 2, 3] };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned.a).not.toBe(original.a);
  });

  test('should clone an object with a Date', () => {
    const original = { d: new Date() };
    const cloned = deepClone(original);
    expect(cloned.d.getTime()).toBe(original.d.getTime());
    expect(cloned.d).not.toBe(original.d);
  });

  test('should clone an object with a RegExp', () => {
    const original = { r: /abc/gi };
    const cloned = deepClone(original);
    expect(cloned.r).toEqual(original.r);
    expect(cloned.r).not.toBe(original.r);
  });

  test('should handle circular references', () => {
    const original = { a: {} };
    original.a.b = original;
    const cloned = deepClone(original);
    expect(cloned.a.b).toBe(cloned);
  });
  
  test('should handle primitive types', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('test')).toBe('test');
    expect(deepClone(null)).toBe(null);
  });

  test('should handle Map object', () => {
    const original = new Map([['key1', 'value1']]);
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });
});
