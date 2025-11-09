const { range } = require('./array-range-utils');

describe('range', () => {
  test('should generate a range from 0 to end-1 when only end is provided', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should generate a range from start to end-1', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  test('should generate a range with a positive step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  test('should generate a range with a negative step', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
  });

  test('should handle zero step (effectively no movement)', () => {
    // This case might result in an infinite loop if not handled carefully in implementation
    // Our current implementation will not enter the loop if start >= end for positive step
    // or start <= end for negative step.
    expect(range(1, 5, 0)).toEqual([]);
    expect(range(5, 1, 0)).toEqual([]);
  });

  test('should return an empty array if start >= end with positive step', () => {
    expect(range(5, 1)).toEqual([]);
    expect(range(5, 5)).toEqual([]);
  });

  test('should return an empty array if start <= end with negative step', () => {
    expect(range(1, 5, -1)).toEqual([]);
    expect(range(5, 5, -1)).toEqual([]);
  });

  test('should handle floating point numbers', () => {
    expect(range(0, 1, 0.2)).toEqual([0, 0.2, 0.4, 0.6000000000000001, 0.8]);
  });

  test('should handle negative start and end values', () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1]);
    expect(range(-5, -1, 2)).toEqual([-5, -3]);
  });
});