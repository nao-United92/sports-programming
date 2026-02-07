const { sample } = require('./array-random-picker');

describe('sample', () => {
  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });

  it('should return an element that is present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return a single element for an array with one element', () => {
    expect(sample([10])).toBe(10);
  });

  // This test has a very small chance of failing due to randomness,
  // but it's a good sanity check for distribution.
  it('should return different elements over many calls', () => {
    const arr = [1, 2, 3, 4, 5];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // Expect at least more than one unique element, ideally all
    expect(results.size).toBeGreaterThan(1);
    expect(results.size).toBeLessThanOrEqual(arr.length);
  });
});