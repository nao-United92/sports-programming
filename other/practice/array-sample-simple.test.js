import { sample } from './array-sample-simple';

describe('sample', () => {
  test('should return an element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(sample([1])).toBe(1);
  });
});
