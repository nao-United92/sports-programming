/**
 * 文字列をスネークケースに変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} スネークケースに変換された文字列。
 */
export function toSnakeCase(str) {
  if (!str) {
    return '';
  }
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}
