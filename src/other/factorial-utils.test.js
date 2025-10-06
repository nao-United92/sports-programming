
import { factorial } from './factorial-utils.js';

describe('factorial', () => {
  it('should calculate the factorial of a positive number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(1)).toBe(1);
    expect(factorial(10)).toBe(3628800);
  });

  it('should return 1 for the factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is only defined for non-negative integers.');
    expect(() => factorial(-5)).toThrow('Factorial is only defined for non-negative integers.');
  });

  it('should throw an error for non-integer numbers', () => {
    expect(() => factorial(5.5)).toThrow('Factorial is only defined for non-negative integers.');
  });
});
