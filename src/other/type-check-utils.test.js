const { isEmpty } = require('./type-check-utils');

describe('isEmpty', () => {
  // Primitive values
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for a string with only spaces', () => {
    expect(isEmpty(' ')).toBe(false);
  });

  // Arrays
  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });

  // Objects
  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  // Maps
  test('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  // Sets
  test('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for a non-empty Set', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  // Other values
  test('should return false for the number 0', () => {
    expect(isEmpty(0)).toBe(false);
  });

  test('should return false for any other number', () => {
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for boolean true', () => {
    expect(isEmpty(true)).toBe(false);
  });

  test('should return false for boolean false', () => {
    expect(isEmpty(false)).toBe(false);
  });

  test('should return false for a function', () => {
    expect(isEmpty(() => {})).toBe(false);
  });

  test('should return false for a Date object', () => {
    expect(isEmpty(new Date())).toBe(false);
  });
});