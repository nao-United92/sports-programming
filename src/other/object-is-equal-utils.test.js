const { isEqual } = require('./object-is-equal-utils.js');

describe('isEqual', () => {
  test('should return true for identical primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  test('should return false for different primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  test('should handle NaN correctly', () => {
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(NaN, 1)).toBe(false);
  });

  test('should return true for identical objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    expect(isEqual(obj, obj)).toBe(true);
  });

  test('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
    const obj2 = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for deeply unequal objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
    const obj2 = { a: 1, b: { c: 2, d: [3, { e: 5 }] } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for deeply equal arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 4]];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for deeply unequal arrays', () => {
    const arr1 = [1, { a: 2 }, [3, 4]];
    const arr2 = [1, { a: 2 }, [3, 5]];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test('should handle Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  test('should handle RegExp objects', () => {
    const regex1 = /abc/gi;
    const regex2 = /abc/gi;
    const regex3 = /xyz/i;
    expect(isEqual(regex1, regex2)).toBe(true);
    expect(isEqual(regex1, regex3)).toBe(false);
  });

  test('should handle Map objects', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map3 = new Map([['a', 1], ['b', { c: 3 }]]);
    expect(isEqual(map1, map2)).toBe(true);
    expect(isEqual(map1, map3)).toBe(false);
  });

  test('should handle Set objects', () => {
    const set1 = new Set([1, { a: 2 }]);
    const set2 = new Set([1, { a: 2 }]);
    const set3 = new Set([1, { a: 3 }]);
    expect(isEqual(set1, set2)).toBe(true);
    expect(isEqual(set1, set3)).toBe(false);
  });

  test('should handle circular references', () => {
    const obj1 = {};
    const obj2 = {};
    obj1.a = obj1;
    obj2.a = obj2;
    expect(isEqual(obj1, obj2)).toBe(true);

    const obj3 = {};
    const obj4 = { b: obj3 };
    obj3.a = obj4;
    obj4.b = obj3;
    expect(isEqual(obj3, obj4)).toBe(false); // Different structure
  });

  test('should return false for different types', () => {
    expect(isEqual({}, [])).toBe(false);
    expect(isEqual(1, '1')).toBe(false);
  });
});
