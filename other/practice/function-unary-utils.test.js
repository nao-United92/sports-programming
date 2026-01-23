import { unary } from './function-unary-utils.js';

describe('unary', () => {
  it('should call the function with only the first argument', () => {
    const originalFunc = jest.fn((a, b, c) => a + b + c);
    const unaryFunc = unary(originalFunc);

    unaryFunc(1, 2, 3);
    expect(originalFunc).toHaveBeenCalledWith(1);
    expect(originalFunc).not.toHaveBeenCalledWith(1, 2, 3);
  });

  it('should preserve `this` context', () => {
    const obj = {
      value: 10,
      addValue: function(num, other) {
        return this.value + num + (other || 0);
      },
    };
    const unaryAddValue = unary(obj.addValue);

    const result = unaryAddValue.call({ value: 100 }, 5, 10);
    expect(result).toBe(105); // 100 (this.value) + 5 (first arg) + 0 (other is discarded)
  });

  it('should work correctly with functions expecting one argument', () => {
    const increment = jest.fn((n) => n + 1);
    const unaryIncrement = unary(increment);

    expect(unaryIncrement(10, 20)).toBe(11);
    expect(increment).toHaveBeenCalledWith(10);
  });

  it('should work correctly with functions expecting no arguments', () => {
    const getPI = jest.fn(() => Math.PI);
    const unaryGetPI = unary(getPI);

    expect(unaryGetPI(1, 2, 3)).toBe(Math.PI);
    expect(getPI).toHaveBeenCalledWith(1); // First arg is passed, even if not used by getPI
  });
});
