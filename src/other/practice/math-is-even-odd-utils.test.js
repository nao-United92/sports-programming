import { isEven, isOdd } from './math-is-even-odd-utils.js';

describe('isEven', () => {
  test('should return true for an even number', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for an odd number', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-5)).toBe(false);
  });
});

describe('isOdd', () => {
  test('should return true for an odd number', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-5)).toBe(true);
  });

  test('should return false for an even number', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
});
