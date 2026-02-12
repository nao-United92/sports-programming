import { sample } from './array-sample';

describe('sample', () => {
  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });

  test('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return the only element for a single-element array', () => {
    const arr = [42];
    expect(sample(arr)).toBe(42);
  });

  test('should return different elements over multiple calls (probabilistically)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // With 100 samples from an array of 10, it's highly likely to get more than one unique result
    expect(results.size).toBeGreaterThan(1);
    results.forEach(result => expect(arr).toContain(result));
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const originalArr = [...arr];
    sample(arr);
    expect(arr).toEqual(originalArr);
  });
});
