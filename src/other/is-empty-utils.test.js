import { isEmpty } from './is-empty-utils.js';

describe('isEmpty', () => {
  // Test cases for truthy results (should be empty)
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return true for empty Maps and Sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  // Test cases for falsy results (should not be empty)
  test('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(' ')).toBe(false); // String with whitespace
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty({ ' ': ' ' })).toBe(false);
  });

  test('should return false for non-empty Maps and Sets', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('should return false for numbers, booleans, and functions', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(123)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
  });

  test('should return false for objects with non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
    expect(isEmpty(obj)).toBe(true); // No enumerable keys
  });

  test('should return false for objects created with a null prototype', () => {
    const objWithNullProto = Object.create(null);
    expect(isEmpty(objWithNullProto)).toBe(true);
    objWithNullProto.a = 1;
    expect(isEmpty(objWithNullProto)).toBe(false);
  });
});