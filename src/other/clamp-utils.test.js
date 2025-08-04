import { clamp } from './clamp-utils.js';

describe('clamp', () => {
  test('should clamp a number to the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should not clamp a number within the bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });
});
