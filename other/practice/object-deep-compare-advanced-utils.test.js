const { isDeepEqual } = require('./object-deep-compare-advanced-utils');

describe('isDeepEqual (advanced)', () => {
  test('should return true for two identical primitive values', () => {
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual('hello', 'hello')).toBe(true);
    expect(isDeepEqual(true, true)).toBe(true);
    expect(isDeepEqual(null, null)).toBe(true);
    expect(isDeepEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for two different primitive values', () => {
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual('hello', 'world')).toBe(false);
    expect(isDeepEqual(true, false)).toBe(false);
    expect(isDeepEqual(null, undefined)).toBe(false);
  });

  test('should return true for two empty objects', () => {
    expect(isDeepEqual({}, {})).toBe(true);
  });

  test('should return true for two identical simple objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for two different simple objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'world' };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for two identical nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
    const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for two different nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
    const obj2 = { a: 1, b: { c: 2, d: { e: 4 } } };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for two identical arrays', () => {
    const arr1 = [1, { a: 2 }, 3];
    const arr2 = [1, { a: 2 }, 3];
    expect(isDeepEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for two different arrays', () => {
    const arr1 = [1, { a: 2 }, 3];
    const arr2 = [1, { a: 3 }, 3];
    expect(isDeepEqual(arr1, arr2)).toBe(false);
  });

  test('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  test('should handle NaN values correctly', () => {
    expect(isDeepEqual(NaN, NaN)).toBe(true);
    expect(isDeepEqual(1, NaN)).toBe(false);
    expect(isDeepEqual({ a: NaN }, { a: NaN })).toBe(true);
    expect(isDeepEqual({ a: NaN }, { a: 1 })).toBe(false);
  });

  test('should return false for objects with different constructors', () => {
    function ClassA() {
      this.a = 1;
    }

    function ClassB() {
      this.a = 1;
    }
    expect(isDeepEqual(new ClassA(), new ClassB())).toBe(false);
  });

  test('should return false for objects with same keys but different types', () => {
    expect(isDeepEqual({ a: 1 }, { a: '1' })).toBe(false);
  });

  test('should handle Map objects', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map3 = new Map([['a', 1], ['b', { c: 3 }]]);
    expect(isDeepEqual(map1, map2)).toBe(true);
    expect(isDeepEqual(map1, map3)).toBe(false);
  });

  test('should handle Set objects with primitives', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 3]);
    const set3 = new Set([1, 2, 4]);
    expect(isDeepEqual(set1, set2)).toBe(true);
    expect(isDeepEqual(set1, set3)).toBe(false);
  });

  test('should handle Set objects with objects', () => {
    const objA = { id: 1, value: 'A' };
    const objB = { id: 2, value: 'B' };
    const objC = { id: 1, value: 'A' }; // Deeply equal to objA but different reference
    const objD = { id: 3, value: 'D' };

    const set1 = new Set([objA, objB]);
    const set2 = new Set([objC, objB]); // objC is deeply equal to objA
    const set3 = new Set([objA, objD]);

    expect(isDeepEqual(set1, set2)).toBe(true);
    expect(isDeepEqual(set1, set3)).toBe(false);
  });
});
