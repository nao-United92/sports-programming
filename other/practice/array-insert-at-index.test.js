const { insert } = require('./array-insert-at-index');

describe('insert', () => {
  it('should insert an element at a specified index', () => {
    const arr = [1, 2, 3, 4];
    expect(insert(arr, 2, 99)).toEqual([1, 2, 99, 3, 4]);
  });

  it('should insert an element at the beginning of the array (index 0)', () => {
    const arr = [1, 2, 3];
    expect(insert(arr, 0, 0)).toEqual([0, 1, 2, 3]);
  });

  it('should insert an element at the end of the array', () => {
    const arr = [1, 2, 3];
    expect(insert(arr, 3, 4)).toEqual([1, 2, 3, 4]);
  });
  
  it('should insert an element at an index greater than array length (append)', () => {
    const arr = [1, 2];
    expect(insert(arr, 5, 3)).toEqual([1, 2, 3]);
  });

  it('should not modify the original array', () => {
    const originalArr = [1, 2, 3];
    insert(originalArr, 1, 99);
    expect(originalArr).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(insert([], 0, 1)).toEqual([1]);
  });

  it('should throw an error if not given an array as the first argument', () => {
    expect(() => insert('not an array', 0, 1)).toThrow(TypeError);
  });
});
