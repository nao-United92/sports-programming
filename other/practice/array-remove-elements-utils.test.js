import { remove } from './array-remove-elements-utils.js';

describe('remove', () => {
  it('should remove all occurrences of a specified value', () => {
    const arr = [1, 2, 3, 2, 4, 2];
    expect(remove(arr, 2)).toEqual([1, 3, 4]);
  });

  it('should return the same array if the value is not found', () => {
    const arr = [1, 2, 3, 4];
    expect(remove(arr, 5)).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    expect(remove([], 1)).toEqual([]);
  });

  it('should handle arrays with different data types', () => {
    const arr = [1, 'a', 2, 'b', 'a'];
    expect(remove(arr, 'a')).toEqual([1, 2, 'b']);
  });
});
