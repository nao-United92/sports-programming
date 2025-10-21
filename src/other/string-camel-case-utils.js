/**
 * 文字列をキャメルケースに変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} キャメルケースに変換された文字列。
 */
export const camelCase = (str) => {
  const s = str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''));
  return s.replace(/^./, (match) => match.toLowerCase());
};
