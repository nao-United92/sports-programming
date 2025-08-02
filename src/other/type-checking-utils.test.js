import {
  isObject,
  isFunction,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isNull,
  isUndefined,
  isDate,
  isRegExp,
} from './type-checking-utils.js';

describe('Type Checking Utilities', () => {
  test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject('string')).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction({})).toBe(false);
  });

  test('isString', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(123)).toBe(false);
  });

  test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('123')).toBe(false);
  });

  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
  });

  test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  test('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
  });

  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
  });

  test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('2024-01-01')).toBe(false);
  });

  test('isRegExp', () => {
    expect(isRegExp(/a/)).toBe(true);
    expect(isRegExp(new RegExp('a'))).toBe(true);
    expect(isRegExp('/a/')).toBe(false);
  });
});
