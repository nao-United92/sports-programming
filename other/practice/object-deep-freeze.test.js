const deepFreeze = require('./object-deep-freeze');

describe('deepFreeze', () => {
  test('should freeze a simple object', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(() => { obj.a = 2; }).toThrow();
    expect(obj.a).toBe(1);
  });

  test('should freeze nested objects', () => {
    const obj = { a: { b: 1 } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(() => { obj.a.b = 2; }).toThrow();
    expect(obj.a.b).toBe(1);
  });

  test('should handle arrays', () => {
    const arr = [1, [2]];
    deepFreeze(arr);
    expect(Object.isFrozen(arr)).toBe(true);
    expect(Object.isFrozen(arr[1])).toBe(true);
    expect(() => { arr[0] = 3; }).toThrow();
    expect(() => { arr[1][0] = 4; }).toThrow();
  });

  test('should return null or non-objects as is', () => {
    expect(deepFreeze(null)).toBe(null);
    expect(deepFreeze(42)).toBe(42);
    expect(deepFreeze('str')).toBe('str');
  });

  test('should handle objects that are already frozen', () => {
    const obj = Object.freeze({ a: 1 });
    expect(deepFreeze(obj)).toBe(obj);
  });
});
