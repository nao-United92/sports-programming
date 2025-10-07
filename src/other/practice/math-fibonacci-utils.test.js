import { fibonacci } from './math-fibonacci-utils.js';

describe('fibonacci', () => {
  test('should return the correct fibonacci number for a positive integer', () => {
    expect(fibonacci(9)).toBe(34);
    expect(fibonacci(1)).toBe(1);
  });

  test('should return 0 for 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('should return -1 for a negative integer', () => {
    expect(fibonacci(-5)).toBe(-1);
  });
});
