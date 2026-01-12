import { range } from './array-range-util';

describe('range', () => {
  it('should create an array of numbers within a given range', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should work with a single number', () => {
    expect(range(1, 1)).toEqual([1]);
  });

  it('should work with negative numbers', () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  it('should return an empty array if start is greater than end', () => {
    expect(range(5, 1)).toEqual([]);
  });
});
