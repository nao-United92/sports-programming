/**
 * 配列の重複する要素を削除し、新しい配列を返します。
 * @param {Array<any>} arr - 処理対象の配列。
 * @returns {Array<any>} 重複する要素が削除された新しい配列。
 */
export function unique(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}
