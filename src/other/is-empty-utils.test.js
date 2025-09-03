import { isEmpty } from './is-empty-utils.js';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty strings, arrays, Maps, and Sets', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for empty plain objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for objects with no own properties (created with Object.create(null))', () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).toBe(true);
  });

  it('should return false for non-empty strings, arrays, Maps, and Sets', () => {
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for numbers, booleans, and functions', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
  });

  it('should return true for objects with prototype properties but no own properties', () => {
    function MyObject() {}
    MyObject.prototype.a = 1;
    expect(isEmpty(new MyObject())).toBe(true);
  });

  it('should return false for class instances with own properties', () => {
    class MyClass {
      constructor() {
        this.a = 1;
      }
    }
    expect(isEmpty(new MyClass())).toBe(false);
  });
});
