import { sample } from './array-sample-utils.js';

describe('sample', () => {
  test('should return one of the elements in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(sample([1])).toBe(1);
  });
});