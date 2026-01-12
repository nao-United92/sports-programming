import { tail } from './array-tail-util';

describe('tail', () => {
  it('should return all but the first element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(tail(arr)).toEqual([2, 3, 4, 5]);
  });

  it('should return an empty array if the array has only one element', () => {
    const arr = [1];
    expect(tail(arr)).toEqual([]);
  });

  it('should return an empty array for an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(tail(null)).toEqual([]);
    expect(tail(undefined)).toEqual([]);
  });
});
