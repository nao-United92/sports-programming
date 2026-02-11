import { pull } from './array-pull-utils.js';

describe('pull', () => {
  it('should remove specified values from an array', () => {
    const arr = [1, 2, 3, 1, 2, 4];
    pull(arr, 1, 2);
    expect(arr).toEqual([3, 4]);
  });

  it('should modify the original array', () => {
    const arr = [1, 2, 3];
    pull(arr, 1);
    expect(arr).toEqual([2, 3]);
  });

  it('should handle values not present in the array', () => {
    const arr = [1, 2, 3];
    pull(arr, 4);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should work with an empty array', () => {
    const arr = [];
    pull(arr, 1);
    expect(arr).toEqual([]);
  });

  it('should work with non-primitive values', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const arr = [obj1, obj2, obj3];
    pull(arr, obj2);
    expect(arr).toEqual([obj1, obj3]);
  });
});
