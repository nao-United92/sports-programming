/**
 * URLのクエリ文字列を解析し、キーと値のペアを持つオブジェクトを返します。
 * @param {string} url - 解析するURL。
 * @returns {object} クエリパラメータのキーと値のペアを持つオブジェクト。
 */
export function getQueryParams(url) {
  const queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }
  const params = new URLSearchParams(queryString);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

/**
 * オブジェクトをURLのクエリ文字列に変換します。
 * @param {object} obj - クエリ文字列に変換するオブジェクト。
 * @returns {string} URLのクエリ文字列。
 */
export function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}