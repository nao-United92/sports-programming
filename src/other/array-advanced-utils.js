/**
 * 2つの配列をマージして、ソートされた新しい配列を返す
 * @param {Array} arr1 - 最初の配列
 * @param {Array} arr2 - 2番目の配列
 * @returns {Array} - マージされ、ソートされた配列
 */
export function mergeAndSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

/**
 * 配列の重複を削除する
 * @param {Array} arr - 配列
 * @returns {Array} - 重複が削除された配列
 */
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * 2つの配列の共通要素を見つける
 * @param {Array} arr1 - 最初の配列
 * @param {Array} arr2 - 2番目の配列
 * @returns {Array} - 共通要素を含む配列
 */
export function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(element => set1.has(element));
}

/**
 * 配列を平坦化する
 * @param {Array} arr - 多次元配列
 * @returns {Array} - 平坦化された配列
 */
export function flattenArray(arr) {
  return arr.flat(Infinity);
}

/**
 * 配列を特定のサイズのチャンクに分割する
 * @param {Array} arr - 分割する配列
 * @param {number} size - チャンクのサイズ
 * @returns {Array} - チャンクに分割された配列
 */
export function chunk(arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
}