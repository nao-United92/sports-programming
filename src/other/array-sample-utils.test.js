import { sample } from './array-sample-utils';

describe('sample', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for non-array inputs', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });

  it('should work with an array of one element', () => {
    expect(sample([1])).toBe(1);
  });
});
