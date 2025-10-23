import { isPlainObject } from './object-is-plain-object-utils.js';

describe('isPlainObject', () => {
  it('should return true for a plain object literal', () => {
    expect(isPlainObject({})).toBe(true);
  });

  it('should return true for an object created with new Object()', () => {
    expect(isPlainObject(new Object())).toBe(true);
  });

  it('should return true for an object created with Object.create(null)', () => {
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for an array', () => {
    expect(isPlainObject([])).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isPlainObject(() => {})).toBe(false);
  });

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isPlainObject('hello')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isPlainObject(123)).toBe(false);
  });

  it('should return false for a boolean', () => {
    expect(isPlainObject(true)).toBe(false);
  });

  it('should return false for a Date object', () => {
    expect(isPlainObject(new Date())).toBe(false);
  });

  it('should return false for a RegExp object', () => {
    expect(isPlainObject(/abc/)).toBe(false);
  });

  it('should return false for a custom class instance', () => {
    class MyClass {}
    expect(isPlainObject(new MyClass())).toBe(false);
  });
});
