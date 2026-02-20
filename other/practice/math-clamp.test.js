import { clamp } from './math-clamp';

describe('clamp', () => {
  test('clamps a number to the lower bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('clamps a number to the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('returns the number if it is within bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
});
