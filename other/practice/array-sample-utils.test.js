import { sample } from './array-sample-utils.js';

describe('sample', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr.includes(result)).toBe(true);
  });

  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return the only element in a single-element array', () => {
    expect(sample([1])).toBe(1);
  });

  it('should handle non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });
});
