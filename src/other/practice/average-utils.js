/**
 * 数値配列の平均値を計算する
 * @param {number[]} arr - 数値の配列
 * @returns {number} - 平均値
 */
export function average(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
