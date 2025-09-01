/**
 * 数値配列から最大値を見つける
 * @param {number[]} arr - 数値の配列
 * @returns {number | undefined} - 最大値、または配列が空の場合はundefined
 */
export function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  return Math.max(...arr);
}
