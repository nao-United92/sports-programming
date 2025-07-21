import { deepEqual } from './deep-equal-utils';

describe('deepEqual', () => {
  test('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for deeply unequal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for deeply equal arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 3]];
    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for deeply unequal arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 4]];
    expect(deepEqual(arr1, arr2)).toBe(false);
  });

  test('should return true for deeply equal dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    expect(deepEqual(date1, date2)).toBe(true);
  });

  test('should return false for deeply unequal dates', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-02');
    expect(deepEqual(date1, date2)).toBe(false);
  });

  test('should return true for deeply equal regex', () => {
    const regex1 = /abc/i;
    const regex2 = /abc/i;
    expect(deepEqual(regex1, regex2)).toBe(true);
  });

  test('should return false for deeply unequal regex', () => {
    const regex1 = /abc/i;
    const regex2 = /abc/g;
    expect(deepEqual(regex1, regex2)).toBe(false);
  });

  test('should return true for deeply equal Maps', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 2 }]]);
    expect(deepEqual(map1, map2)).toBe(true);
  });

  test('should return false for deeply unequal Maps', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 3 }]]);
    expect(deepEqual(map1, map2)).toBe(false);
  });

  test('should return true for deeply equal Sets', () => {
    const set1 = new Set([1, 2, { a: 3 }]);
    const set2 = new Set([1, 2, { a: 3 }]);
    expect(deepEqual(set1, set2)).toBe(true);
  });

  test('should return false for deeply unequal Sets', () => {
    const set1 = new Set([1, 2, { a: 3 }]);
    const set2 = new Set([1, 2, { a: 4 }]);
    expect(deepEqual(set1, set2)).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(null, undefined)).toBe(false);
  });

  test('should handle primitive values', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('hello', 'hello')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('hello', 'world')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
  });

  test('should handle circular references', () => {
    const obj1 = {};
    const obj2 = {};
    obj1.a = obj2;
    obj2.a = obj1;
    // Deep equal should ideally handle circular references without stack overflow.
    // For simplicity, this basic implementation might not handle it perfectly.
    // A more robust solution would require tracking visited objects.
    expect(deepEqual(obj1, obj2)).toBe(true);
  });
});
