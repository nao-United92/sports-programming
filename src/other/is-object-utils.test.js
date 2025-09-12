import { isObject } from './is-object-utils';

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(/abc/)).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
  });

  it('should return true for functions', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject(function() {})).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol('a'))).toBe(false);
  });
});
