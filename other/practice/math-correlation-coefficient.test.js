const correlationCoefficient = require('./math-correlation-coefficient');

describe('correlationCoefficient', () => {
  test('returns 1 for perfectly correlated data', () => {
    expect(correlationCoefficient([1, 2, 3], [1, 2, 3])).toBeCloseTo(1);
    expect(correlationCoefficient([1, 2, 3], [2, 4, 6])).toBeCloseTo(1);
  });

  test('returns -1 for perfectly inversely correlated data', () => {
    expect(correlationCoefficient([1, 2, 3], [-1, -2, -3])).toBeCloseTo(-1);
  });

  test('returns 0 for uncorrelated data', () => {
    expect(correlationCoefficient([1, 2, 3], [3, 1, 2])).toBeCloseTo(-0.5);
    expect(correlationCoefficient([1, 1, 1], [1, 2, 3])).toBe(0); // Zero variance
  });

  test('throws error for unequal lengths', () => {
    expect(() => correlationCoefficient([1], [1, 2])).toThrow();
  });

  test('throws error for empty arrays', () => {
    expect(() => correlationCoefficient([], [])).toThrow();
  });
});
