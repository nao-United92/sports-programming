import { insert } from './array-insert.js';

describe('insert', () => {
  it('should insert an element at the specified index', () => {
    const arr = [1, 2, 4];
    const expected = [1, 2, 3, 4];
    expect(insert(arr, 2, 3)).toEqual(expected);
  });

  it('should insert at the beginning of the array', () => {
    const arr = [2, 3];
    const expected = [1, 2, 3];
    expect(insert(arr, 0, 1)).toEqual(expected);
  });

  it('should insert at the end of the array', () => {
    const arr = [1, 2];
    const expected = [1, 2, 3];
    expect(insert(arr, 2, 3)).toEqual(expected);
  });

  it('should handle inserting into an empty array', () => {
    expect(insert([], 0, 1)).toEqual([1]);
  });
});
