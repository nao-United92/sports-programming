/**
 * 文字列をケバブケースに変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} ケバブケースに変換された文字列。
 */
export const kebabCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
