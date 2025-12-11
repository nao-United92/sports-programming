const range = require('./array-range-utils-extended');

describe('range', () => {
  test('should generate a range with only an end value (start = 0, step = 1)', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(0)).toEqual([]);
    expect(range(1)).toEqual([0]);
  });

  test('should generate a range with start and end values (step = 1)', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    expect(range(5, 1)).toEqual([]); // Should be empty if start > end and step is positive
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
  });

  test('should generate a range with start, end, and positive step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    expect(range(1, 10, 3)).toEqual([1, 4, 7]);
    expect(range(0, 5, 0.5)).toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
  });

  test('should generate a range with start, end, and negative step', () => {
    expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2]);
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
    expect(range(1, 5, -1)).toEqual([]); // Should be empty if start < end and step is negative
  });

  test('should handle floating point numbers', () => {
    expect(range(0, 2, 0.5)).toEqual([0, 0.5, 1, 1.5]);
    expect(range(2, 0, -0.5)).toEqual([2, 1.5, 1, 0.5]);
  });

  test('should return an empty array if step is 0', () => {
    expect(range(0, 5, 0)).toEqual([]);
    expect(range(5, 0, 0)).toEqual([]);
  });

  test('should handle invalid input gracefully', () => {
    expect(range(NaN)).toEqual([]);
    expect(range(0, NaN)).toEqual([]);
    expect(range(0, 5, NaN)).toEqual([]);
    expect(range(Infinity)).toEqual([]); // Range to Infinity should return empty array
  });
});
