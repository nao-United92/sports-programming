
/**
 * URLのクエリ文字列をオブジェクトに変換します。
 * @param {string} url - 対象のURL。
 * @returns {Object} - クエリパラメータを含むオブジェクト。
 */
const getUrlParams = (url) => {
  const params = {};
  const queryString = url.split('?')[1];
  if (queryString) {
    const pairs = queryString.split('&');
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      params[key] = decodeURIComponent(value || '');
    }
  }
  return params;
};

module.exports = { getUrlParams };
