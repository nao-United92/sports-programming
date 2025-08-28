/**
 * 文字列を指定された長さに切り詰めます。
 * @param {string} str - 切り詰める文字列。
 * @param {number} length - 最大長。
 * @returns {string} 切り詰められた文字列。
 */
export const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
};

/**
 * 文字列をスラッグ形式に変換します。
 * @param {string} str - スラッグに変換する文字列。
 * @returns {string} スラッグ形式の文字列。
 */
export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};
