import { isPlainObject } from './is-plain-object-utils.js';

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return false for non-plain objects', () => {
    function Foo() {
      this.a = 1;
    }
    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new Array(1))).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject('abc')).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(/abc/)).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(Symbol('foo'))).toBe(false);
    expect(isPlainObject(Promise.resolve())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new WeakMap())).toBe(false);
    expect(isPlainObject(new WeakSet())).toBe(false);
  });
});
