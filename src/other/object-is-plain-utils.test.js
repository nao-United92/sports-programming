const { isPlainObject } = require('./object-is-plain-utils');

describe('isPlainObject', () => {
  it('should return true for a literal object', () => {
    expect(isPlainObject({})).toBe(true);
  });

  it('should return true for an object created with new Object()', () => {
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return true for an object with no prototype', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for an array', () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Array())).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should return false for primitive values', () => {
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(Symbol('foo'))).toBe(false);
  });

  it('should return false for class instances', () => {
    class MyClass {}
    const instance = new MyClass();
    expect(isPlainObject(instance)).toBe(false);
  });

  it('should return false for built-in types like Date or RegExp', () => {
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/abc/)).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });
});
