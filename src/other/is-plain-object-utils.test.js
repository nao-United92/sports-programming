import isPlainObject from './is-plain-object-utils';

describe('isPlainObject', () => {
  test('should return true for a plain object', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
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

  test('should return false for DOM elements', () => {
    // This test might not run in a Node.js environment without a DOM implementation
    // but it's good to include for completeness if running in a browser-like env (jsdom)
    if (typeof document !== 'undefined') {
      expect(isPlainObject(document.createElement('div'))).toBe(false);
    }
  });

  test('should return false for instances of custom classes', () => {
    class MyClass {
      constructor() {
        this.a = 1;
      }
    }
    expect(isPlainObject(new MyClass())).toBe(false);
  });

  test('should return false for other built-in objects', () => {
    expect(isPlainObject(/a/)).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
  });
});
