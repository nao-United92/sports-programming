/**
 * 文字列が指定された長さを超える場合に、文字列を切り詰めて末尾に "..." を追加します。
 * @param {string} str - 切り詰める文字列。
 * @param {number} num - 文字列の最大長。
 * @returns {string} 切り詰められた文字列。
 */
export const truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

/**
 * 文字列をケバブケース（例: 'hello-world'）に変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} ケバブケースに変換された文字列。
 */
export const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

/**
 * 文字列をスネークケース（例: 'hello_world'）に変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} スネークケースに変換された文字列。
 */
export const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
