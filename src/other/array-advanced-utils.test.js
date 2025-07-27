import { mergeAndSort, removeDuplicates, findCommonElements, flattenArray, chunk } from './array-advanced-utils.js';

describe('mergeAndSort', () => {
  test('2つのソートされた配列を正しくマージし、ソートする', () => {
    expect(mergeAndSort([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('空の配列を扱う', () => {
    expect(mergeAndSort([], [1, 2])).toEqual([1, 2]);
    expect(mergeAndSort([1, 2], [])).toEqual([1, 2]);
  });
});

describe('removeDuplicates', () => {
  test('配列から重複を削除する', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('findCommonElements', () => {
  test('2つの配列の共通要素を見つける', () => {
    expect(findCommonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });
});

describe('flattenArray', () => {
  test('多次元配列を平坦化する', () => {
    expect(flattenArray([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('chunk', () => {
  test('配列を正しいサイズのチャンクに分割する', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
});

describe('difference', () => {
  test('2つの配列の差分を正しく見つける', () => {
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  test('空の配列を扱う', () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
    expect(difference([], [1, 2])).toEqual([]);
  });
});

describe('uniqueBy', () => {
  test('should return a unique array based on the iteratee function', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    const uniqueArr = uniqueBy(arr, item => item.id);
    expect(uniqueArr).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  test('should handle primitive arrays with iteratee', () => {
    const arr = [1, 2, 2, 3, 1];
    const uniqueArr = uniqueBy(arr, item => item);
    expect(uniqueArr).toEqual([1, 2, 3]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(uniqueBy([], item => item.id)).toEqual([]);
  });

  test('should handle non-array inputs gracefully', () => {
    expect(uniqueBy(null, item => item)).toEqual([]);
    expect(uniqueBy(undefined, item => item)).toEqual([]);
  });
});
