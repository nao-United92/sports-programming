import { power } from './math-power-utils.js';

describe('power', () => {
  test('should return the correct power for a positive exponent', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 2)).toBe(25);
  });

  test('should return 1 for an exponent of 0', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(5, 0)).toBe(1);
  });

  test('should work with a base of 1', () => {
    expect(power(1, 5)).toBe(1);
  });

  test('should work with an exponent of 1', () => {
    expect(power(5, 1)).toBe(5);
  });
});
