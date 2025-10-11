/**
 * 文字列をスタートケースに変換します。
 * 各単語の最初の文字を大文字にし、単語間をスペースで区切ります。
 * @param {string} str - 変換する文字列。
 * @returns {string} スタートケースに変換された文字列。
 */
export const startCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
    .replace(/\s\s*/g, ' ') // Replace multiple spaces with a single space
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};