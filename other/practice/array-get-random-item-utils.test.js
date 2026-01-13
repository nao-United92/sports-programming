
import { getRandomItem } from './array-get-random-item-utils.js';

describe('getRandomItem', () => {
  it('should return undefined for an empty array', () => {
    expect(getRandomItem([])).toBeUndefined();
  });

  it('should return the only element for a single-element array', () => {
    expect(getRandomItem([1])).toBe(1);
  });

  it('should return an element that is present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const randomItem = getRandomItem(arr);
    expect(arr).toContain(randomItem);
  });

  it('should return different elements over multiple calls (probabilistically)', () => {
    const arr = [1, 2, 3, 4, 5];
    const results = new Set();
    for (let i = 0; i < 100; i++) { // Run multiple times to increase probability of diversity
      results.add(getRandomItem(arr));
    }
    // It's highly probable that not all 5 elements will be picked,
    // but we expect more than just one unique element if the array has many.
    // This is a probabilistic test, not deterministic.
    expect(results.size).toBeGreaterThan(1);
    expect(results.size).toBeLessThanOrEqual(arr.length);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    getRandomItem(arr);
    expect(arr).toEqual(originalArr);
  });
});
