const range = require('./array-range-by-step-utils');

describe('range', () => {
  test('should create a range of numbers with default step 1', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should create a range starting from a non-zero number', () => {
    expect(range(2, 5)).toEqual([2, 3, 4]);
  });

  test('should create a range with a custom positive step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  test('should create a range with a custom negative step', () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should handle single argument (end specified, start=0)', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should handle single argument and negative numbers (start=0, end is negative)', () => {
    expect(range(-3)).toEqual([0, -1, -2]); // Default step becomes -1
  });

  test('should return an empty array if start equals end', () => {
    expect(range(5, 5)).toEqual([]);
  });

  test('should return an empty array if step does not reach end (positive step)', () => {
    expect(range(0, 5, 10)).toEqual([]);
  });

  test('should return an empty array if step does not reach end (negative step)', () => {
    expect(range(5, 0, -10)).toEqual([]);
  });

  test('should handle negative start and positive end', () => {
    expect(range(-2, 3)).toEqual([-2, -1, 0, 1, 2]);
  });

  test('should handle floating point numbers', () => {
    expect(range(0, 1, 0.2)).toEqual([0, 0.2, 0.4, 0.6000000000000001, 0.8]);
  });
});
