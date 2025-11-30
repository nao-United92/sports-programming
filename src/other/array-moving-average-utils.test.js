import { movingAverage } from './array-moving-average-utils.js';

describe('movingAverage', () => {
  it('should calculate the moving average correctly', () => {
    expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
  });

  it('should calculate the moving average with a window of size 1', () => {
    expect(movingAverage([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if the input array is smaller than the window size', () => {
    expect(movingAverage([1, 2], 3)).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(movingAverage([], 3)).toEqual([]);
  });

  it('should handle floating point numbers', () => {
    const result = movingAverage([1.5, 2.5, 3.5, 4.5, 5.5], 3);
    expect(result.length).toBe(3);
    expect(result[0]).toBeCloseTo(2.5);
    expect(result[1]).toBeCloseTo(3.5);
    expect(result[2]).toBeCloseTo(4.5);
  });

  it('should throw an error for non-positive window size', () => {
    expect(() => movingAverage([1, 2, 3], 0)).toThrow('Size must be a positive integer.');
    expect(() => movingAverage([1, 2, 3], -1)).toThrow('Size must be a positive integer.');
    expect(() => movingAverage([1, 2, 3], 1.5)).toThrow('Size must be a positive integer.');
  });
});
