import { range } from './array-range-utils';

describe('range', () => {
  it('should create a range of numbers', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
  });

  it('should create a range with a start and end', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it('should create a range with a step', () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
  });

  it('should create a negative range', () => {
    expect(range(-4)).toEqual([0, -1, -2, -3]);
  });

  it('should create a negative range with a negative step', () => {
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it('should return an empty array if start and end are equal', () => {
    expect(range(0, 0)).toEqual([]);
  });
});
