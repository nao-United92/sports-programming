import { flip } from './function-flip-utils';

describe('flip', () => {
  const subtract = (a, b) => a - b;
  const concat = (a, b) => a + b;

  it('should reverse the arguments of a function', () => {
    const flippedSubtract = flip(subtract);
    expect(flippedSubtract(5, 10)).toBe(5); // 10 - 5
    expect(subtract(5, 10)).toBe(-5); // Original function still works as expected
  });

  it('should work with more than two arguments', () => {
    const joinWithDash = (a, b, c) => `${a}-${b}-${c}`;
    const flippedJoin = flip(joinWithDash);
    expect(flippedJoin('one', 'two', 'three')).toBe('three-two-one');
  });

  it('should maintain the `this` context', () => {
    const obj = {
      prefix: 'Result:',
      format: function(value, unit) {
        return `${this.prefix} ${value}${unit}`;
      },
    };

    const flippedFormat = flip(obj.format);

    expect(flippedFormat.call(obj, 'kg', 10)).toBe('Result: 10kg');
  });

  it('should throw an error if func is not a function', () => {
    expect(() => flip(null)).toThrow('Expected a function');
    expect(() => flip('not a function')).toThrow('Expected a function');
  });

  it('should work with functions that have side effects (though generally discouraged)', () => {
    let arr = [];
    const pushTwoArgs = (a, b) => { arr.push(a, b); };
    const flippedPush = flip(pushTwoArgs);

    flippedPush(1, 2);
    expect(arr).toEqual([2, 1]);
  });
});
