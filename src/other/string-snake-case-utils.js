/**
 * 文字列をスネークケースに変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} スネークケースに変換された文字列。
 */
export const snakeCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // camelCase to snake_case
    .replace(/[^a-zA-Z0-9]+/g, '_') // Replace non-alphanumeric with underscore
    .toLowerCase() // Convert to lowercase
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
};
