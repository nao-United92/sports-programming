
import { fibonacci } from './fibonacci-utils.js';

describe('fibonacci', () => {
  it('should return 0 for fibonacci(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 for fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should calculate the nth Fibonacci number for positive integers', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Fibonacci is only defined for non-negative integers.');
    expect(() => fibonacci(-5)).toThrow('Fibonacci is only defined for non-negative integers.');
  });

  it('should throw an error for non-integer numbers', () => {
    expect(() => fibonacci(5.5)).toThrow('Fibonacci is only defined for non-negative integers.');
  });
});
