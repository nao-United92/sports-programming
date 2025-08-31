import { isEqual } from './deep-equal-robust-utils.js';

describe('isEqual', () => {
  it('should return true for equal primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(NaN, NaN)).toBe(true);
  });

  it('should return false for unequal primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
    const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for deeply unequal objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
    const obj2 = { a: 1, b: { c: 2, d: [3, 5] } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for deeply equal arrays', () => {
    const arr1 = [1, [2, 3], { a: 4 }];
    const arr2 = [1, [2, 3], { a: 4 }];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for deeply unequal arrays', () => {
    const arr1 = [1, [2, 3], { a: 4 }];
    const arr2 = [1, [2, 3], { a: 5 }];
    expect(isEqual(arr1, arr2)).toBe(false);
  });

  it('should handle Date objects', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  it('should handle RegExp objects', () => {
    const regex1 = /foo/g;
    const regex2 = /foo/g;
    const regex3 = /bar/g;
    expect(isEqual(regex1, regex2)).toBe(true);
    expect(isEqual(regex1, regex3)).toBe(false);
  });

  it('should handle Map objects', () => {
    const map1 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map2 = new Map([['a', 1], ['b', { c: 2 }]]);
    const map3 = new Map([['a', 1], ['b', { c: 3 }]]);
    expect(isEqual(map1, map2)).toBe(true);
    expect(isEqual(map1, map3)).toBe(false);
  });

  it('should handle Set objects', () => {
    const set1 = new Set([1, { a: 2 }]);
    const set2 = new Set([1, { a: 2 }]);
    const set3 = new Set([1, { a: 3 }]);
    expect(isEqual(set1, set2)).toBe(true);
    expect(isEqual(set1, set3)).toBe(false);
  });
});
