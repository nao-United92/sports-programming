import { sample } from './array-sample-random-item-utils.js';

describe('sample', () => {
  it('should return a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    expect(sample([10])).toBe(10);
  });

  // This test has a small chance of failing due to randomness, but it's unlikely with a large enough sample size
  it('should return different elements over multiple calls (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // Expect at least some variety, not necessarily all elements
    expect(results.size).toBeGreaterThan(1);
    expect(results.size).toBeLessThanOrEqual(arr.length);
  });
});