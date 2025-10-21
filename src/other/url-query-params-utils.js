/**
 * URLからクエリパラメータをオブジェクトとして取得します。
 * @param {string} url - 対象のURL。
 * @returns {Object} クエリパラメータのキーと値を持つオブジェクト。
 */
export const getUrlQueryParams = (url) => {
  const params = {};
  const urlParts = url.split('?');
  if (urlParts.length > 1) {
    const queryString = urlParts[1];
    const pairs = queryString.split('&');
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    }
  }
  return params;
};
