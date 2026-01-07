import { sample } from './array-sample-extractor.js';

describe('sample', () => {
  it('should return an element that is present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr.includes(result)).toBe(true);
  });

  it('should return undefined for an empty array', () => {
    const result = sample([]);
    expect(result).toBeUndefined();
  });



  it('should return the single element for an array with one element', () => {
    const arr = ['a'];
    const result = sample(arr);
    expect(result).toBe('a');
  });

  it('should work with different data types', () => {
    const arr = [{ id: 1 }, 'hello', 5, true];
    const result = sample(arr);
    expect(arr.includes(result)).toBe(true);
  });
});
