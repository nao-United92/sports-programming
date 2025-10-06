/**
 * クエリ文字列をオブジェクトに変換します。
 * @param {string} queryString - URLのクエリ文字列 (例: '?foo=bar&baz=qux')
 * @returns {object} パースされたキーと値のオブジェクト。
 */
function parse(queryString) {
  if (!queryString || typeof queryString !== 'string') {
    return {};
  }

  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
}

/**
 * オブジェクトをクエリ文字列に変換します。
 * @param {object} obj - キーと値のオブジェクト。
 * @returns {string} 生成されたクエリ文字列 (例: 'foo=bar&baz=qux')
 */
function stringify(obj) {
  if (obj === null || typeof obj !== 'object') {
    return '';
  }

  const params = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      params.append(key, obj[key]);
    }
  }
  return params.toString();
}

module.exports = { parse, stringify };