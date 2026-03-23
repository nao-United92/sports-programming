import { factorial } from './math-factorial.js';

describe('factorial', () => {
  test('should calculate factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('should calculate factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('should return NaN for negative numbers', () => {
    expect(factorial(-1)).toBe(NaN);
  });
  
  test('should return NaN for non-integers', () => {
      expect(factorial(2.5)).toBe(NaN);
  });
});
