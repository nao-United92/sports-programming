import { circularShift } from './array-circular-shift';

describe('circularShift', () => {
  test('should shift array to the right', () => {
    expect(circularShift([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test('should shift array to the left', () => {
    expect(circularShift([1, 2, 3, 4, 5], -1)).toEqual([2, 3, 4, 5, 1]);
  });

  test('should handle shift larger than length', () => {
    expect(circularShift([1, 2, 3], 4)).toEqual([3, 1, 2]);
  });

  test('should return copy if shift is 0', () => {
    const arr = [1, 2, 3];
    expect(circularShift(arr, 0)).toEqual(arr);
    expect(circularShift(arr, 0)).not.toBe(arr);
  });
});
