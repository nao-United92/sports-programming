import { negate } from './function-negate-utils.js';

describe('negate', () => {
  it('should negate the result of a predicate function', () => {
    const isEven = (n) => n % 2 === 0;
    const isOdd = negate(isEven);

    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });

  it('should pass arguments to the original predicate', () => {
    const isGreaterThan = (a, b) => a > b;
    const isNotGreaterThan = negate(isGreaterThan);

    expect(isNotGreaterThan(5, 3)).toBe(false); // !(5 > 3)
    expect(isNotGreaterThan(3, 5)).toBe(true);  // !(3 > 5)
  });

  it('should maintain the `this` context', () => {
    const obj = {
      value: 10,
      isGreaterThanValue: function(num) {
        return num > this.value;
      },
    };

    const isNotGreaterThanValue = negate(obj.isGreaterThanValue);

    expect(isNotGreaterThanValue.call({ value: 5 }, 7)).toBe(false); // !(7 > 5)
    expect(isNotGreaterThanValue.call({ value: 10 }, 7)).toBe(true); // !(7 > 10)
  });
});