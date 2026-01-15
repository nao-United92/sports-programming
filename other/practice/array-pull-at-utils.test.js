import { pullAt } from './array-pull-at-utils.js';

describe('pullAt', () => {
  test('should pull elements at specified indexes', () => {
    let arr = ['a', 'b', 'c', 'd'];
    let pulled = pullAt(arr, [1, 3]);
    expect(arr).toEqual(['a', 'c']);
    expect(pulled).toEqual(['b', 'd']);
  });

  test('should not modify the array if no indexes are given', () => {
    let arr = ['a', 'b', 'c', 'd'];
    pullAt(arr, []);
    expect(arr).toEqual(['a', 'b', 'c', 'd']);
  });

  test('should return an empty array if no elements are pulled', () => {
    let arr = ['a', 'b', 'c', 'd'];
    let pulled = pullAt(arr, []);
    expect(pulled).toEqual([]);
  });
});
