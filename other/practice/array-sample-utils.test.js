const { sample } = require('./array-sample-utils');

describe('sample', () => {
  test('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample(123)).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(sample([10])).toBe(10);
  });

  test('should return a random element (basic check)', () => {
    const arr = [1, 2, 3];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // This test is probabilistic, but highly likely to pass if random works
    expect(results.size).toBeGreaterThan(1);
    expect(results.has(1)).toBe(true);
    expect(results.has(2)).toBe(true);
    expect(results.has(3)).toBe(true);
  });
});