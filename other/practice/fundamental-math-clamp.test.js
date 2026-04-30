const clamp = require('./fundamental-math-clamp');

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

  test('handles range where min and max are the same', () => {
    expect(clamp(5, 10, 10)).toBe(10);
  });
});
