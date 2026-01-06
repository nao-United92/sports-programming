const isEmptyObject = require('./object-is-empty-utils');

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({
      a: 1
    })).toBe(false);
    expect(isEmptyObject({
      0: 'test'
    })).toBe(false);
  });

  test('should return true for an empty array', () => {
    expect(isEmptyObject([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmptyObject([1, 2, 3])).toBe(false);
  });

  test('should return true for null', () => {
    expect(isEmptyObject(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(true);
  });

  test('should return false for primitive values', () => {
    expect(isEmptyObject(123)).toBe(false);
    expect(isEmptyObject('hello')).toBe(false);
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(0)).toBe(false);
    expect(isEmptyObject('')).toBe(false);
  });

  test('should return false for other object types like Date or RegExp', () => {
    expect(isEmptyObject(new Date())).toBe(false);
    expect(isEmptyObject(/regex/)).toBe(false);
  });

  test('should return false for a Function', () => {
    expect(isEmptyObject(() => {})).toBe(false);
    expect(isEmptyObject(function() {})).toBe(false);
  });

  test('should return true for an object created with Object.create(null) if it has no properties', () => {
    const obj = Object.create(null);
    expect(isEmptyObject(obj)).toBe(true);
  });

  test('should return false for an object created with Object.create(null) if it has properties', () => {
    const obj = Object.create(null);
    obj.a = 1;
    expect(isEmptyObject(obj)).toBe(false);
  });
});
