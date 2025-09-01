/**
 * 数値配列から最小値を見つける
 * @param {number[]} arr - 数値の配列
 * @returns {number | undefined} - 最小値、または配列が空の場合はundefined
 */
export function min(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  return Math.min(...arr);
}
