import { sample } from './sample-utils.js';

describe('sample', () => {
  test('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined for a non-array input', () => {
    expect(sample('not an array')).toBeUndefined();
    expect(sample({ a: 1 })).toBeUndefined();
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
  });
});
