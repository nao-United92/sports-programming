
import { isEqual } from './object-is-equal-utils.js';

describe('isEqual', () => {
  test('should return true for equal primitives', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual(null, null)).toBe(true);
  });

  test('should return false for unequal primitives', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  test('should return true for equal simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for equal nested objects', () => {
    const obj1 = { a: { b: { c: 1 } }, d: [1, { e: 2 }] };
    const obj2 = { a: { b: { c: 1 } }, d: [1, { e: 2 }] };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for unequal nested objects', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 99 } } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for equal arrays', () => {
    const arr1 = [1, 'a', { b: 2 }];
    const arr2 = [1, 'a', { b: 2 }];
    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test('should return false for unequal arrays', () => {
    const arr1 = [1, 'a', { b: 2 }];
    const arr2 = [1, 'a', { b: 3 }];
    expect(isEqual(arr1, arr2)).toBe(false);
  });
});
