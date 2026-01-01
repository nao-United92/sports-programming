const { isEmptyObject } = require('./object-is-empty-utils');

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for null and undefined', () => {
    expect(isEmptyObject(null)).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('should return false for non-object types', () => {
    expect(isEmptyObject(123)).toBe(false);
    expect(isEmptyObject('hello')).toBe(false);
    expect(isEmptyObject(true)).toBe(false);
  });

  test('should return false for arrays', () => {
    expect(isEmptyObject([])).toBe(false);
    expect(isEmptyObject([1, 2])).toBe(false);
  });
  
  test('should return true for empty class instances', () => {
    function MyObject() {}
    MyObject.prototype.a = 1;
    expect(isEmptyObject(new MyObject())).toBe(true);
  });
});
