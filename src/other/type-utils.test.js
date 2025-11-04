import { isNumber, isString, isBoolean, isFunction, isObject, isArray, isDate } from './type-utils.js';

describe('Type Utilities', () => {
  test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
  });

  test('isString', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(new String('hello'))).toBe(true);
    expect(isString(123)).toBe(false);
  });

  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('true')).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction({})).toBe(false);
  });

  test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({a: 1})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
  });

  test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('2025-11-04')).toBe(false);
  });
});
