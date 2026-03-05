const clamp = require('./math-clamp');

describe('clamp', () => {
  test('clamps a number within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamps a number to the lower bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test('clamps a number to the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('handles positive and negative bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
  });
});
