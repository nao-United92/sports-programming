import { pull } from './array-pull-utils';

describe('pull', () => {
  it('should remove specified values from the array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    pull(array, 'a', 'c');
    expect(array).toEqual(['b', 'b']);
  });

  it('should modify the original array', () => {
    const array = [1, 2, 3];
    const result = pull(array, 1, 3);
    expect(result).toBe(array);
  });

  it('should do nothing if no values are specified', () => {
    const array = [1, 2, 3];
    pull(array);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should handle non-array inputs gracefully', () => {
    const obj = { a: 1 };
    expect(pull(obj, 1)).toBe(obj);
    expect(pull(null, 1)).toBeNull();
  });
});
