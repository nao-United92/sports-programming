import { clamp } from './math-clamp';

describe('clamp', () => {
  test('clamps a number within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamps a number below the minimum', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('clamps a number above the maximum', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('handles negative ranges', () => {
    expect(clamp(-10, -20, -5)).toBe(-10);
    expect(clamp(-25, -20, -5)).toBe(-20);
    expect(clamp(0, -20, -5)).toBe(-5);
  });
});
