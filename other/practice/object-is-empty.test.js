const { isEmptyObject } = require('./object-is-empty');

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  test('should return false for an object with inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;
    expect(isEmptyObject(new Foo())).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isEmptyObject([])).toBe(false);
    expect(isEmptyObject([1, 2])).toBe(false);
  });

  test('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('should return false for a string', () => {
    expect(isEmptyObject('')).toBe(false);
    expect(isEmptyObject('hello')).toBe(false);
  });

  test('should return false for a number', () => {
    expect(isEmptyObject(0)).toBe(false);
    expect(isEmptyObject(123)).toBe(false);
  });

  test('should return false for a boolean', () => {
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(false)).toBe(false);
  });

  test('should return false for a function', () => {
    expect(isEmptyObject(() => {})).toBe(false);
  });

  test('should return true for an object created with Object.create(null) if it has no properties', () => {
    expect(isEmptyObject(Object.create(null))).toBe(true);
  });

  test('should return false for an object created with Object.create(null) if it has properties', () => {
    const obj = Object.create(null);
    obj.a = 1;
    expect(isEmptyObject(obj)).toBe(false);
  });
});
