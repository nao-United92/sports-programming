import { isString, isArray, isFunction, isBoolean, isObject, isNumber, isUndefined } from './type-checking-utils.js';

describe('type-checking-utils', () => {
  it('should check for a string', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(123)).toBe(false);
  });

  it('should check for an array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  it('should check for a function', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(null)).toBe(false);
  });

  it('should check for a boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('true')).toBe(false);
  });

  it('should check for an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
  });

  it('should check for a number', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-10)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });

  it('should check for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
  });
});
