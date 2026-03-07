const clampNumber = require('./math-clamp-number');

describe('clampNumber', () => {
  test('clamps value within range', () => {
    expect(clampNumber(5, 1, 10)).toBe(5);
  });

  test('clamps value to lower boundary', () => {
    expect(clampNumber(-5, 0, 10)).toBe(0);
  });

  test('clamps value to upper boundary', () => {
    expect(clampNumber(15, 0, 10)).toBe(10);
  });
});
