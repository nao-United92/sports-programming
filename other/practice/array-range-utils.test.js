const range = require('./array-range-utils');

describe('range', () => {
  test('should generate a range with positive step', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  test('should generate a range with negative step', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2, 1]);
    expect(range(10, 1, -3)).toEqual([10, 7, 4, 1]);
  });

  test('should handle start equals end', () => {
    expect(range(5, 5)).toEqual([5]);
  });

  test('should return an empty array if start is greater than end with positive step', () => {
    expect(range(5, 1)).toEqual([]);
  });

  test('should return an empty array if start is less than end with negative step', () => {
    expect(range(1, 5, -1)).toEqual([]);
  });

  test('should handle floating point numbers', () => {
    expect(range(1.0, 3.0, 0.5)).toEqual([1.0, 1.5, 2.0, 2.5, 3.0]);
  });

  test('should throw an error for non-numeric input', () => {
    expect(() => range('a', 5)).toThrow('Expected start, end, and step to be numbers');
    expect(() => range(1, 'b')).toThrow('Expected start, end, and step to be numbers');
    expect(() => range(1, 5, 'c')).toThrow('Expected start, end, and step to be numbers');
  });

  test('should throw an error if step is zero', () => {
    expect(() => range(1, 5, 0)).toThrow('Step cannot be zero');
  });
});
