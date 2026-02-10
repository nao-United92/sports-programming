import dropRight from './array-drop-right-simple';

describe('dropRight', () => {
  it('should drop the last element by default', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr)).toEqual([1, 2]);
  });

  it('should drop the specified number of elements from the right', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(dropRight(arr, 3)).toEqual([1, 2]);
  });

  it('should return an empty array if more elements are dropped than exist', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 5)).toEqual([]);
  });

  it('should return the original array if 0 elements are dropped', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 0)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(dropRight(arr, 2)).toEqual([]);
  });
});
