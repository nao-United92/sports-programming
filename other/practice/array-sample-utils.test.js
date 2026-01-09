import { sample } from './array-sample-utils.js';

describe('sample', () => {
  test('should return a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    const arr = [];
    const result = sample(arr);
    expect(result).toBeUndefined();
  });

  test('should return undefined for a non-array input', () => {
    const result = sample('not an array');
    expect(result).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    const arr = ['a'];
    const result = sample(arr);
    expect(result).toBe('a');
  });
});
