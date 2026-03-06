const weightedSample = require('./array-weighted-sample');

describe('weightedSample', () => {
  test('returns the element if it is the only one with weight', () => {
    expect(weightedSample(['a', 'b', 'c'], [1, 0, 0])).toBe('a');
    expect(weightedSample(['a', 'b', 'c'], [0, 1, 0])).toBe('b');
    expect(weightedSample(['a', 'b', 'c'], [0, 0, 1])).toBe('c');
  });

  test('throws error for mismatched lengths', () => {
    expect(() => weightedSample(['a', 'b'], [1])).toThrow();
  });

  test('throws error for empty arrays', () => {
    expect(() => weightedSample([], [])).toThrow();
  });

  test('handles fractional weights', () => {
    // Basic test to ensure it doesn't crash
    const res = weightedSample(['a', 'b'], [0.1, 0.9]);
    expect(['a', 'b']).toContain(res);
  });
});
