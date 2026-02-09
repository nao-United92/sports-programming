import drop from './array-drop-simple';

describe('drop', () => {
  it('should drop the first element by default', () => {
    const arr = [1, 2, 3];
    expect(drop(arr)).toEqual([2, 3]);
  });

  it('should drop the specified number of elements from the beginning', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(drop(arr, 3)).toEqual([4, 5]);
  });

  it('should return an empty array if more elements are dropped than exist', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 5)).toEqual([]);
  });

  it('should return the original array if 0 elements are dropped', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 0)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(drop(arr, 2)).toEqual([]);
  });
});
