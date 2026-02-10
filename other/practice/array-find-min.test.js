import arrayFindMin from './array-find-min';

describe('arrayFindMin', () => {
  test('should find the minimum value in a simple array', () => {
    expect(arrayFindMin([1, 2, 3, 4, 5])).toBe(1);
  });

  test('should find the minimum value in an array with negative numbers', () => {
    expect(arrayFindMin([-1, -5, -2, -10])).toBe(-10);
  });

  test('should find the minimum value in an array with mixed positive and negative numbers', () => {
    expect(arrayFindMin([-1, 0, 5, -2, 10])).toBe(-2);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayFindMin([])).toBeUndefined();
  });

  test('should return the single element for an array with one element', () => {
    expect(arrayFindMin([7])).toBe(7);
  });

  test('should handle arrays with duplicate minimum values', () => {
    expect(arrayFindMin([5, 1, 3, 1, 2])).toBe(1);
  });

  test('should handle floating point numbers', () => {
    expect(arrayFindMin([1.1, 2.2, 0.5, 2.1])).toBe(0.5);
  });
});
