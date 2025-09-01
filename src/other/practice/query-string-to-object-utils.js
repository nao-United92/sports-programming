/**
 * URLのクエリ文字列をオブジェクトに変換する
 * @param {string} url - URLまたはクエリ文字列
 * @returns {object} - パースされたクエリパラメータのオブジェクト
 */
export function queryStringToObject(url) {
  const queryString = url.includes('?') ? url.split('?')[1] : url;
  if (!queryString) {
    return {};
  }

  return queryString.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
    return acc;
  }, {});
}
