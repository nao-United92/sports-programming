import { reverse } from './array-reverse-util';

describe('reverse', () => {
  it('should reverse an array without modifying the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const reversedArray = reverse(originalArray);
    expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array for an empty array', () => {
    expect(reverse([])).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(reverse(null)).toEqual([]);
    expect(reverse(undefined)).toEqual([]);
    expect(reverse({})).toEqual([]);
    expect(reverse('')).toEqual([]);
    expect(reverse(123)).toEqual([]);
  });
});
