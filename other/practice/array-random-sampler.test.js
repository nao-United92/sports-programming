import { sample } from './array-random-sampler.js';

describe('sample', () => {
  test('should return an element that is present in the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const result = sample(originalArray);
    expect(originalArray).toContain(result);
  });

  test('should return the only element for an array with one element', () => {
    expect(sample([1])).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(sample('not an array')).toBeUndefined();
    expect(sample(null)).toBeUndefined();
  });
});
