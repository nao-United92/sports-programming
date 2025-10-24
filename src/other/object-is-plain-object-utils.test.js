import { isPlainObject } from './object-is-plain-object-utils';

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(function() {})).toBe(false);
  });

  test('should return false for null and undefined', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  test('should return false for primitive values', () => {
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('test'))).toBe(false);
  });

  test('should return false for Date objects', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });

  test('should return false for RegExp objects', () => {
    expect(isPlainObject(/abc/)).toBe(false);
  });

  test('should return false for class instances', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for objects with custom prototypes', () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    expect(isPlainObject(obj)).toBe(false);
  });
});