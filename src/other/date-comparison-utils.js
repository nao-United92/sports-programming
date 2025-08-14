/**
 * 2つの日付が同じ日であるかを判定します。
 * 時刻は無視されます。
 * @param {Date} date1 - 比較する最初の日付オブジェクト。
 * @param {Date} date2 - 比較する2番目の日付オブジェクト。
 * @returns {boolean} 2つの日付が同じ日であればtrue、そうでなければfalse。
 */
export function isSameDay(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}
