import { isFibonacci } from './math-is-fibonacci';

describe('isFibonacci', () => {
  test('should return true for Fibonacci numbers', () => {
    expect(isFibonacci(0)).toBe(true);
    expect(isFibonacci(1)).toBe(true);
    expect(isFibonacci(2)).toBe(true);
    expect(isFibonacci(3)).toBe(true);
    expect(isFibonacci(5)).toBe(true);
    expect(isFibonacci(8)).toBe(true);
    expect(isFibonacci(13)).toBe(true);
    expect(isFibonacci(21)).toBe(true);
  });

  test('should return false for non-Fibonacci numbers', () => {
    expect(isFibonacci(4)).toBe(false);
    expect(isFibonacci(6)).toBe(false);
    expect(isFibonacci(7)).toBe(false);
    expect(isFibonacci(9)).toBe(false);
    expect(isFibonacci(10)).toBe(false);
  });
});
