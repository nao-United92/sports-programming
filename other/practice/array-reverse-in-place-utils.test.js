import { reverseInPlace } from './array-reverse-in-place-utils';

describe('reverseInPlace', () => {
  test('should reverse an array with even number of elements in-place', () => {
    const arr = [1, 2, 3, 4];
    const originalRef = arr;
    const result = reverseInPlace(arr);
    expect(result).toEqual([4, 3, 2, 1]);
    expect(result).toBe(originalRef); // Should be the same array instance
  });

  test('should reverse an array with odd number of elements in-place', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalRef = arr;
    const result = reverseInPlace(arr);
    expect(result).toEqual([5, 4, 3, 2, 1]);
    expect(result).toBe(originalRef);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const originalRef = arr;
    const result = reverseInPlace(arr);
    expect(result).toEqual([]);
    expect(result).toBe(originalRef);
  });

  test('should handle a single element array', () => {
    const arr = [1];
    const originalRef = arr;
    const result = reverseInPlace(arr);
    expect(result).toEqual([1]);
    expect(result).toBe(originalRef);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => reverseInPlace(null)).toThrow('Expected an array');
    expect(() => reverseInPlace(undefined)).toThrow('Expected an array');
    expect(() => reverseInPlace("string")).toThrow('Expected an array');
    expect(() => reverseInPlace(123)).toThrow('Expected an array');
    expect(() => reverseInPlace({})).toThrow('Expected an array');
  });
});
