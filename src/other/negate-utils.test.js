import negate from './negate-utils.js';

describe('negate', () => {
  test('should create a function that negates the result of a predicate', () => {
    const isEven = (n) => n % 2 === 0;
    const isOdd = negate(isEven);

    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
  });

  test('should pass arguments to the original function', () => {
    const mockPredicate = jest.fn();
    const negated = negate(mockPredicate);
    negated(1, 'a', true);
    expect(mockPredicate).toHaveBeenCalledWith(1, 'a', true);
  });

  test('should maintain the `this` context', () => {
    const mockPredicate = jest.fn(function() {
      return this.value;
    });
    const negated = negate(mockPredicate);
    const context = { value: true, negated: negated };

    expect(context.negated()).toBe(false);
    expect(mockPredicate).toHaveBeenCalledWith();
    expect(mockPredicate).toHaveReturnedWith(true);
  });

  test('should throw an error if the argument is not a function', () => {
    expect(() => negate(123)).toThrow(TypeError);
    expect(() => negate(null)).toThrow(TypeError);
    expect(() => negate({})).toThrow(TypeError);
  });
});
