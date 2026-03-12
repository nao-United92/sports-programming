const randomInt = require('./math-random-int-util');

describe('randomInt', () => {
  test('returns number within range', () => {
    const val = randomInt(1, 10);
    expect(val).toBeGreaterThanOrEqual(1);
    expect(val).toBeLessThanOrEqual(10);
  });

  test('throws error for invalid input', () => {
    expect(() => randomInt('1', 10)).toThrow('Inputs must be numbers');
  });
});
