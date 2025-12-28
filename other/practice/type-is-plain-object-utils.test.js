const { isPlainObject } = require('./type-is-plain-object-utils');

class CustomClass {
  constructor(name) {
    this.name = name;
  }
}

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return false for instances of custom classes', () => {
    expect(isPlainObject(new CustomClass('test'))).toBe(false);
  });
  
  it('should return false for arrays', () => {
    expect(isPlainObject([])).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject('hello')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });

  it('should return true for objects with a null prototype', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });
});
