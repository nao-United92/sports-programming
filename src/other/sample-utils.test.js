import { sample } from './sample-utils.js';

describe('sample', () => {
  it('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    const array = [];
    expect(sample(array)).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample(123)).toBeUndefined();
  });

  it('should work with an array of one element', () => {
    const array = [1];
    expect(sample(array)).toBe(1);
  });
});
