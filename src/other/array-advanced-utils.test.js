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