import { flip } from './function-flip-utils.js';

describe('flip', () => {
  it('should reverse the order of arguments', () => {
    const divide = (a, b) => a / b;
    const flippedDivide = flip(divide);

    expect(divide(10, 2)).toBe(5);
    expect(flippedDivide(10, 2)).toBe(0.2); // 2 / 10
  });

  it('should work with functions taking multiple arguments', () => {
    const concat = (a, b, c) => `${a}-${b}-${c}`;
    const flippedConcat = flip(concat);

    expect(concat('a', 'b', 'c')).toBe('a-b-c');
    expect(flippedConcat('a', 'b', 'c')).toBe('c-b-a');
  });

  it('should preserve `this` context', () => {
    const obj = {
      value: 10,
      subtract: function(a, b) {
        return this.value - a - b;
      },
    };
    const flippedSubtract = flip(obj.subtract);

    const result = flippedSubtract.call({ value: 50 }, 5, 10);
    expect(result).toBe(35); // 50 - 10 - 5
  });

  it('should work with functions taking a single argument', () => {
    const identity = (a) => a;
    const flippedIdentity = flip(identity);

    expect(flippedIdentity(123)).toBe(123);
  });
});
