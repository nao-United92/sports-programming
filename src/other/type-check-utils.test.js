
import {
  isObject, isArray, isFunction, isString, isNumber, isBoolean, isNull, isUndefined, isDate
} from './type-check-utils.js';

describe('Type Checking Utilities', () => {
  test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });

  test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction({})).toBe(false);
  });

  test('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
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
    expect(isDate('2023-01-01')).toBe(false);
  });
});
