import { sample } from './sample-utils.js';

describe('sample', () => {
  it('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    const array = [];
    const result = sample(array);
    expect(result).toBeUndefined();
  });

  it('should return undefined for a null or undefined array', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
  });

  it('should work with an array of one element', () => {
    const array = ['a'];
    const result = sample(array);
    expect(result).toBe('a');
  });
});