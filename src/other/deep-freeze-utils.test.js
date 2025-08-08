import { deepFreeze } from './deep-freeze-utils.js';

describe('deepFreeze', () => {
  test('should freeze a simple object', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(() => { obj.a = 2; }).toThrow();
  });

  test('should deeply freeze a nested object', () => {
    const obj = { a: { b: { c: 3 } } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a.b)).toBe(true);
    expect(() => { obj.a.b.c = 4; }).toThrow();
  });

  test('should handle arrays', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    deepFreeze(arr);
    expect(Object.isFrozen(arr)).toBe(true);
    expect(Object.isFrozen(arr[0])).toBe(true);
    expect(() => { arr[0].a = 2; }).toThrow();
  });

  test('should not affect primitive values', () => {
    expect(deepFreeze(123)).toBe(123);
    expect(deepFreeze('hello')).toBe('hello');
    expect(deepFreeze(null)).toBe(null);
    expect(deepFreeze(undefined)).toBe(undefined);
  });

  test('should handle objects that are already frozen', () => {
    const obj = { a: 1 };
    Object.freeze(obj);
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(() => { obj.a = 2; }).toThrow();
  });
});
