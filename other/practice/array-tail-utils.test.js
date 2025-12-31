import { tail } from './array-tail-utils.js';

describe('tail', () => {
  it('should return all but the last element of an array', () => {
    expect(tail([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the array has one element', () => {
    expect(tail([1])).toEqual([]);
  });

  it('should return an empty array if the array is empty', () => {
    expect(tail([])).toEqual([]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    tail(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});