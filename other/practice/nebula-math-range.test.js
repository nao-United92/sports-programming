const range = require('./nebula-math-range');

describe('nebula-math-range', () => {
  test('should create range from 0 to stop', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should create range from start to stop', () => {
    expect(range(2, 6)).toEqual([2, 3, 4, 5]);
  });

  test('should handle step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  test('should handle negative step', () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
    expect(range(0, -5, -1)).toEqual([0, -1, -2, -3, -4]);
  });

  test('should return empty array for invalid ranges', () => {
    expect(range(10, 5)).toEqual([]);
    expect(range(5, 10, -1)).toEqual([]);
  });

  test('should throw error for zero step', () => {
    expect(() => range(0, 5, 0)).toThrow('Step cannot be zero');
  });

  test('should handle floating point steps', () => {
    const result = range(0, 1, 0.2);
    expect(result.length).toBe(5);
    expect(result[0]).toBe(0);
    expect(result[4]).toBeCloseTo(0.8);
  });
});
