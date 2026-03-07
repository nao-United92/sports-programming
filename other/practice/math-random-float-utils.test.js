const randomFloat = require('./math-random-float-utils');

describe('randomFloat', () => {
  test('generates float within range 0-10', () => {
    const val = randomFloat(0, 10);
    expect(val).toBeGreaterThanOrEqual(0);
    expect(val).toBeLessThanOrEqual(10);
  });

  test('generates float within range -10 to -5', () => {
    const val = randomFloat(-10, -5);
    expect(val).toBeGreaterThanOrEqual(-10);
    expect(val).toBeLessThanOrEqual(-5);
  });
});
