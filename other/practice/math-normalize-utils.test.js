const normalize = require('./math-normalize-utils');

describe('normalize', () => {
  test('normalizes 50 in range 0-100 to 0.5', () => {
    expect(normalize(50, 0, 100)).toBe(0.5);
  });

  test('normalizes 15 in range 10-20 to 0.5', () => {
    expect(normalize(15, 10, 20)).toBe(0.5);
  });

  test('returns 0 if min equals max', () => {
    expect(normalize(50, 50, 50)).toBe(0);
  });

  test('normalizes 20 in range 10-20 to 1', () => {
    expect(normalize(20, 10, 20)).toBe(1);
  });
});
