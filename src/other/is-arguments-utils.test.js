import { isArguments } from './is-arguments-utils';

describe('isArguments', () => {
  it('should return true for an arguments object', () => {
    function testFunc() {
      expect(isArguments(arguments)).toBe(true);
    }
    testFunc();
    testFunc(1, 2, 3);
  });

  it('should return false for an array', () => {
    expect(isArguments([])).toBe(false);
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  it('should return false for a plain object', () => {
    expect(isArguments({})).toBe(false);
    expect(isArguments({ a: 1 })).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isArguments(null)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isArguments(123)).toBe(false);
    expect(isArguments('string')).toBe(false);
    expect(isArguments(true)).toBe(false);
    expect(isArguments(Symbol('a'))).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isArguments(() => {})).toBe(false);
    expect(isArguments(function() {})).toBe(false);
  });
});
