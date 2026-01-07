import { pull } from './array-pull-remover.js';

describe('pull', () => {
  it('should remove specified values from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
    pull(arr, 'a', 'c');
    expect(arr).toEqual(['b', 'b']);
  });

  it('should not modify the array if no values are specified for removal', () => {
    const arr = [1, 2, 3];
    pull(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    pull(arr, 1, 2);
    expect(arr).toEqual([]);
  });

  it('should not modify the array if specified values are not found', () => {
    const arr = [1, 2, 3];
    pull(arr, 4, 5);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should return the mutated array', () => {
    const arr = [1, 2, 3];
    const result = pull(arr, 1);
    expect(result).toBe(arr);
    expect(result).toEqual([2, 3]);
  });
});
