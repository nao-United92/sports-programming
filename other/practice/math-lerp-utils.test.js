const lerp = require('./math-lerp-utils');

describe('lerp', () => {
  test('interpolates between 0 and 100 at 0.5', () => {
    expect(lerp(0, 100, 0.5)).toBe(50);
  });

  test('interpolates between 10 and 20 at 0.25', () => {
    expect(lerp(10, 20, 0.25)).toBe(12.5);
  });

  test('returns start value at t=0', () => {
    expect(lerp(10, 20, 0)).toBe(10);
  });

  test('returns end value at t=1', () => {
    expect(lerp(10, 20, 1)).toBe(20);
  });
});
