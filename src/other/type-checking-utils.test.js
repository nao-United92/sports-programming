import { isString, isArray, isFunction, isBoolean, isObject } from './type-checking-utils.js';

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
});
