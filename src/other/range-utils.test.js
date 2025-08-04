import { range } from './range-utils.js';

describe('range', () => {
  test('should generate a range of numbers from start to end (exclusive) with default step 1', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should generate a range of numbers with a custom step', () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  test('should generate a descending range of numbers', () => {
    expect(range(5, 0, 1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should generate a descending range of numbers with a custom step', () => {
    expect(range(10, 0, 2)).toEqual([10, 8, 6, 4, 2]);
  });

  test('should return an empty array if start equals end', () => {
    expect(range(5, 5)).toEqual([]);
  });

  test('should return an empty array if start is greater than end and step is positive', () => {
    expect(range(5, 0, 1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should return an empty array if start is less than end and step is negative', () => {
    expect(range(0, 5, -1)).toEqual([]);
  });

  test('should throw an error if step is zero', () => {
    expect(() => range(0, 5, 0)).toThrow('Step cannot be zero.');
  });
});
