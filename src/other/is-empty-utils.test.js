import { isEmpty } from './is-empty-utils';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty strings, arrays, maps, and sets', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty strings, arrays, maps, and sets', () => {
    expect(isEmpty('text')).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return true for numbers, booleans, and functions', () => {
    expect(isEmpty(123)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(() => {})).toBe(true);
  });

  it('should handle objects with non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });

  it('should handle array-like objects (e.g., arguments)', () => {
    function getArguments() {
      return arguments;
    }
    expect(isEmpty(getArguments())).toBe(true);
    expect(isEmpty(getArguments(1, 2))).toBe(false);
  });
});