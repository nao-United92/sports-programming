import average from './math-average-utils';

describe('average', () => {
  it('should calculate the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });

  it('should handle an array with a single number', () => {
    expect(average([10])).toBe(10);
  });

  it('should handle negative numbers', () => {
    expect(average([-1, -2, -3, -4, -5])).toBe(-3);
  });

  it('should handle mixed positive and negative numbers', () => {
    expect(average([-1, 1, -2, 2, 0])).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });

  it('should return 0 for non-array inputs', () => {
    expect(average(null)).toBe(0);
    expect(average(undefined)).toBe(0);
    expect(average({})).toBe(0);
    expect(average("test")).toBe(0);
  });
});