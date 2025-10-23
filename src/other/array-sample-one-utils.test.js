import { sample } from './array-sample-one-utils.js';

describe('sample', () => {
  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
    expect(sample('string')).toBeUndefined();
    expect(sample({})).toBeUndefined();
  });

  it('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return the only element for a single-element array', () => {
    const arr = [42];
    expect(sample(arr)).toBe(42);
  });

  it('should return different elements over multiple calls (probabilistic test)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    // Call many times to increase probability of getting different results
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // Expect to have sampled more than one unique element
    expect(results.size).toBeGreaterThan(1);
    // Expect all sampled elements to be within the original array
    results.forEach(item => expect(arr).toContain(item));
  });
});
