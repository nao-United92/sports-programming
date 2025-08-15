/**
 * URLのクエリ文字列をパースしてオブジェクトに変換します。
 * @param {string} queryString - ?を含む、または含まないクエリ文字列。
 * @returns {object} パースされたキーと値のペアを持つオブジェクト。
 */
export const parseQuery = (queryString) => {
  const query = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  if (!query) {
    return {};
  }
  return query.split('&').reduce((acc, part) => {
    const [key, value] = part.split('=');
    if (key) {
      acc[decodeURIComponent(key)] = value ? decodeURIComponent(value) : true;
    }
    return acc;
  }, {});
};

/**
 * オブジェクトをURLクエリ文字列に変換します。
 * @param {object} obj - クエリ文字列に変換するオブジェクト。
 * @returns {string} 生成されたクエリ文字列。
 */
export const stringifyQuery = (obj) => {
  if (!obj) {
    return '';
  }
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value === true) {
        return encodeURIComponent(key);
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
};

/**
 * URL文字列からクエリパラメータをオブジェクトとして取得します。
 * @param {string} url - 解析するURL。
 * @returns {object} クエリパラメータのオブジェクト。
 */
export const getURLParameters = (url) => {
  try {
    const search = new URL(url).search;
    return parseQuery(search);
  } catch (error) {
    return {};
  }
};

/**
 * URL文字列からパス名を取得します。
 * @param {string} url - 解析するURL。
 * @returns {string} URLのパス名。
 */
export const getURLPath = (url) => {
  try {
    return new URL(url).pathname;
  } catch (error) {
    return '';
  }
};

/**
 * URL文字列からプロトコルを取得します。
 * @param {string} url - 解析するURL。
 * @returns {string} URLのプロトコル（例: 'https:'）。
 */
export const getURLProtocol = (url) => {
  try {
    return new URL(url).protocol;
  } catch (error) {
    return '';
  }
};