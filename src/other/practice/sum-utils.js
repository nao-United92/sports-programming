/**
 * 数値配列の合計値を計算する
 * @param {number[]} arr - 数値の配列
 * @returns {number} - 合計値
 */
export function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
