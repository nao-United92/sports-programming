import { constant } from './function-constant-utils.js';

describe('constant', () => {
  it('should return a function', () => {
    expect(typeof constant(1)).toBe('function');
  });

  it('should return the specified value when invoked', () => {
    const constNum = constant(123);
    const constStr = constant('hello');
    const constObj = constant({ a: 1 });

    expect(constNum()).toBe(123);
    expect(constStr()).toBe('hello');
    expect(constObj()).toEqual({ a: 1 }); // Use toEqual for object comparison
  });

  it('should always return the same value on subsequent calls', () => {
    const constValue = constant([1, 2, 3]);
    const result1 = constValue();
    const result2 = constValue();

    expect(result1).toBe(result2); // Should return the exact same array reference
    expect(result1).toEqual([1, 2, 3]);
  });

  it('should ignore any arguments passed to the returned function', () => {
    const constVal = constant(42);
    expect(constVal(1, 2, 3)).toBe(42);
    expect(constVal('a', 'b')).toBe(42);
  });
});
