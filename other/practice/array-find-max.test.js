import arrayFindMax from './array-find-max';

describe('arrayFindMax', () => {
  test('should find the maximum value in a simple array', () => {
    expect(arrayFindMax([1, 2, 3, 4, 5])).toBe(5);
  });

  test('should find the maximum value in an array with negative numbers', () => {
    expect(arrayFindMax([-1, -5, -2, -10])).toBe(-1);
  });

  test('should find the maximum value in an array with mixed positive and negative numbers', () => {
    expect(arrayFindMax([-1, 0, 5, -2, 10])).toBe(10);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayFindMax([])).toBeUndefined();
  });

  test('should return the single element for an array with one element', () => {
    expect(arrayFindMax([7])).toBe(7);
  });

  test('should handle arrays with duplicate maximum values', () => {
    expect(arrayFindMax([1, 5, 3, 5, 2])).toBe(5);
  });

  test('should handle floating point numbers', () => {
    expect(arrayFindMax([1.1, 2.2, 0.5, 2.1])).toBe(2.2);
  });
});
