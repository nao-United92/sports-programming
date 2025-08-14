/**
 * オブジェクトのネストされたプロパティを安全に取得します。
 * @param {object} obj - 処理対象のオブジェクト。
 * @param {string|string[]} path - プロパティへのパス（ドット区切りの文字列または文字列の配列）。
 * @param {any} [defaultValue] - プロパティが見つからない場合に返すデフォルト値。
 * @returns {any} 取得したプロパティの値、またはデフォルト値。
 */
export function get(obj, path, defaultValue) {
  if (obj === null || typeof obj !== 'object') {
    return defaultValue;
  }

  const pathArray = Array.isArray(path) ? path : (path === '' ? [] : path.split('.'));

  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, key)) {
      return defaultValue;
    }
    current = current[key];
  }

  return current;
}