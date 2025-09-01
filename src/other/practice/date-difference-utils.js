/**
 * 2つの日付の差を日数で計算する
 * @param {Date} date1 - 日付1
 * @param {Date} date2 - 日付2
 * @returns {number} - 日数の差
 */
export function differenceInDays(date1, date2) {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
