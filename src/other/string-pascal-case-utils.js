/**
 * 文字列をパスカルケースに変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} パスカルケースに変換された文字列。
 */
export const pascalCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase() // Convert to lowercase first
    .replace(/[-_\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
    .replace(/^./, (match) => match.toUpperCase());
};