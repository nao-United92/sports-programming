const { isEven, isOdd } = require('./math-is-even-odd-utils');

describe('isEvenOddUtils', () => {
  test('isEven correctly identifies even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(3)).toBe(false);
  });

  test('isOdd correctly identifies odd numbers', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-5)).toBe(true);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(0)).toBe(false);
  });
});
