import {
  isNumber, isString, isBoolean, isObject, isArray, isFunction,
  isNull, isUndefined, isNil, isDate, isRegExp, isError, isSymbol
} from './type-check-utils.js';

describe('Type Check Utilities', () => {
  test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber('123')).toBe(false);
  });

  test('isString', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(123)).toBe(false);
  });

  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
  });

  test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
  });

  test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction('function')).toBe(false);
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

  test('isNil', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
  });

  test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('2023-01-01')).toBe(false);
  });

  test('isRegExp', () => {
    expect(isRegExp(/a/)).toBe(true);
    expect(isRegExp(new RegExp('a'))).toBe(true);
    expect(isRegExp('/a/')).toBe(false);
  });

  test('isError', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError({ message: 'error' })).toBe(false);
  });

  test('isSymbol', () => {
    expect(isSymbol(Symbol('s'))).toBe(true);
    expect(isSymbol('symbol')).toBe(false);
  });
});