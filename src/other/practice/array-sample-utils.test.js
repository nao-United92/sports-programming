import { sample } from './array-sample-utils.js';

describe('sample', () => {
  test('should return a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
  });
});
