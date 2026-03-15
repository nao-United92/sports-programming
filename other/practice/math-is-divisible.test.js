import { isDivisible } from './math-is-divisible';

describe('isDivisible', () => {
  test('checks if 6 is divisible by 3', () => {
    expect(isDivisible(6, 3)).toBe(true);
  });

  test('checks if 6 is not divisible by 4', () => {
    expect(isDivisible(6, 4)).toBe(false);
  });

  test('checks if 0 is divisible by any non-zero number', () => {
    expect(isDivisible(0, 5)).toBe(true);
  });
});
