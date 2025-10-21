/**
 * 日付が週末（土曜日または日曜日）であるかどうかを判定します。
 * @param {Date} date - 判定する日付。
 * @returns {boolean} 週末であればtrue、そうでなければfalse。
 */
export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
