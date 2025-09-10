import { isFunction } from './is-function-utils.js';

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(class MyClass {})).toBe(true); // Classes are functions
  });

  it('should return false for non-function values', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
