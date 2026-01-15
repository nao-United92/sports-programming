import { pull } from './array-pull-utils.js';

describe('pull', () => {
  test('should pull values from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
    pull(arr, 'a', 'c');
    expect(arr).toEqual(['b', 'b']);
  });

  test('should not modify the array if no values are pulled', () => {
    const arr = ['a', 'b', 'c'];
    pull(arr, 'd', 'e');
    expect(arr).toEqual(['a', 'b', 'c']);
  });

  test('should return the modified array', () => {
    const arr = ['a', 'b', 'c'];
    const result = pull(arr, 'b');
    expect(result).toBe(arr);
    expect(result).toEqual(['a', 'c']);
  });
});