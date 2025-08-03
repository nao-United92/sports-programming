/**
 * URLからクエリパラメータをオブジェクトとして取得します。
 * @param {string} url - 対象のURL。
 * @returns {object} クエリパラメータのキーと値を持つオブジェクト。
 */
function getQueryParams(url) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

/**
 * オブジェクトをクエリ文字列に変換します。
 * @param {object} obj - クエリ文字列に変換するオブジェクト。
 * @returns {string} 'key=value&key2=value2' 形式のクエリ文字列。
 */
function objectToQueryString(obj) {
  const params = new URLSearchParams(obj);
  return params.toString();
}

/**
 * URLがHTTPSプロトコルを使用しているかを確認します。
 * @param {string} url - 対象のURL。
 * @returns {boolean} HTTPSであればtrue、そうでなければfalse。
 */
function isHttps(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

module.exports = { getQueryParams, objectToQueryString, isHttps };
