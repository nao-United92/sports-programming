import * as t from './type-check-utils';

describe('Type Checking Utilities', () => {
  test('isObject', () => {
    expect(t.isObject({})).toBe(true);
    expect(t.isObject([])).toBe(true);
    expect(t.isObject(null)).toBe(false);
    expect(t.isObject(42)).toBe(false);
  });

  test('isString', () => {
    expect(t.isString('hello')).toBe(true);
    expect(t.isString(123)).toBe(false);
  });

  test('isNumber', () => {
    expect(t.isNumber(123)).toBe(true);
    expect(t.isNumber(NaN)).toBe(true); // NaN is a number type
    expect(t.isNumber('123')).toBe(false);
  });

  test('isFunction', () => {
    expect(t.isFunction(() => {})).toBe(true);
    expect(t.isFunction(null)).toBe(false);
  });

  test('isArray', () => {
    expect(t.isArray([])).toBe(true);
    expect(t.isArray({})).toBe(false);
  });

  test('isDate', () => {
    expect(t.isDate(new Date())).toBe(true);
    expect(t.isDate(Date.now())).toBe(false);
  });

  test('isRegExp', () => {
    expect(t.isRegExp(/a/)).toBe(true);
    expect(t.isRegExp('/a/')).toBe(false);
  });
});
