import rotateArray from './array-rotate-utils';

describe('rotateArray', () => {
  it('should rotate an array to the left by a positive number of shifts', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
  });

  it('should rotate an array to the right by a negative number of shifts', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -2)).toEqual([4, 5, 1, 2, 3]);
  });

  it('should return the same array (shallow copy) if shifts is 0', () => {
    const arr = [1, 2, 3];
    const rotated = rotateArray(arr, 0);
    expect(rotated).toEqual([1, 2, 3]);
    expect(rotated).not.toBe(arr);
  });

  it('should handle shifts greater than array length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 7)).toEqual([3, 4, 5, 1, 2]); // 7 % 5 = 2 shifts
    expect(rotateArray([1, 2, 3, 4, 5], -7)).toEqual([4, 5, 1, 2, 3]); // -7 % 5 = -2 shifts, which is 3 shifts to the right
  });

  it('should handle empty arrays', () => {
    expect(rotateArray([], 3)).toEqual([]);
    expect(rotateArray([], -3)).toEqual([]);
  });

  it('should handle single-element arrays', () => {
    expect(rotateArray([1], 5)).toEqual([1]);
    expect(rotateArray([1], -5)).toEqual([1]);
  });

  it('should handle arrays with non-primitive elements', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const arr = [obj1, obj2, obj3];
    expect(rotateArray(arr, 1)).toEqual([obj2, obj3, obj1]);
  });

  it('should return an empty array if input is not an array', () => {
    expect(rotateArray(null, 2)).toEqual([]);
    expect(rotateArray(undefined, 2)).toEqual([]);
  });
});