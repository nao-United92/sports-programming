import { isString, isNumber, isObject, isArray } from './type-check-utils.js';

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(new String('world'))).toBe(false); // Primitive string vs String object
  });

  it('should return false for non-strings', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1.5)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(Number.MAX_VALUE)).toBe(true);
  });

  it('should return false for non-numbers or NaN', () => {
    expect(isNumber('123')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });
});

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  it('should return true for arrays', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2])).toBe(true);
  });

  it('should return true for functions', () => {
    expect(isObject(() => {})).toBe(true);
  });

  it('should return true for new String/Number/Boolean objects', () => {
    expect(isObject(new String(''))).toBe(true);
    expect(isObject(new Number(1))).toBe(true);
    expect(isObject(new Boolean(true))).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObject('hello')).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray('hello')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(() => {})).toBe(false);
  });
});