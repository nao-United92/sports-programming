import { clamp, lerp, sum, average } from './math-utils';

describe('clamp', () => {
  test('should clamp a value to the min', () => {
    expect(clamp(0, 5, 10)).toBe(5);
  });

  test('should clamp a value to the max', () => {
    expect(clamp(15, 5, 10)).toBe(10);
  });

  test('should not clamp a value within the range', () => {
    expect(clamp(7, 5, 10)).toBe(7);
  });
});

describe('lerp', () => {
  test('should interpolate between two values', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });

  test('should return the start value at 0', () => {
    expect(lerp(0, 10, 0)).toBe(0);
  });

  test('should return the end value at 1', () => {
    expect(lerp(0, 10, 1)).toBe(10);
  });
});

describe('sum', () => {
  test('should return the sum of multiple numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  test('should return 0 for no arguments', () => {
    expect(sum()).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(sum(-1, -2, 3)).toBe(0);
  });
});

describe('average', () => {
  test('should return the average of multiple numbers', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
  });

  test('should return 0 for no arguments', () => {
    expect(average()).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(average(-1, -2, 6)).toBe(1);
  });

  test('should handle floating point numbers', () => {
    expect(average(1.5, 2.5)).toBe(2);
  });
});