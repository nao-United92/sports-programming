import { negate } from './function-negate-utils';

describe('negate', () => {
  const isEven = (n) => n % 2 === 0;
  const isPositive = (n) => n > 0;

  it('should negate the result of a predicate function', () => {
    const isOdd = negate(isEven);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
  });

  it('should pass arguments to the original predicate function', () => {
    const isNotPositive = negate(isPositive);
    expect(isNotPositive(10)).toBe(false);
    expect(isNotPositive(-5)).toBe(true);
    expect(isNotPositive(0)).toBe(true);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      threshold: 5,
      isAboveThreshold: function(value) {
        return value > this.threshold;
      },
    };

    const isNotAboveThreshold = negate(obj.isAboveThreshold);

    expect(isNotAboveThreshold.call(obj, 10)).toBe(false);
    expect(isNotAboveThreshold.call(obj, 3)).toBe(true);
  });

  it('should throw an error if predicate is not a function', () => {
    expect(() => negate(null)).toThrow('Expected a function');
    expect(() => negate('not a function')).toThrow('Expected a function');
  });
});
