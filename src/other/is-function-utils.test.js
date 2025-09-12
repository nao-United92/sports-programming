import { isFunction } from './is-function-utils';

describe('isFunction', () => {
  it('should return true for regular functions', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
  });

  it('should return true for async functions', () => {
    expect(isFunction(async function() {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
  });

  it('should return true for generator functions', () => {
    expect(isFunction(function*() {})).toBe(true);
  });

  it('should return true for class constructors', () => {
    class MyClass {}
    expect(isFunction(MyClass)).toBe(true);
  });

  it('should return false for non-function types', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(new Error())).toBe(false);
  });
});
