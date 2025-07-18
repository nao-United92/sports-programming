
/**
 * URLからJSONデータを取得します。
 * @param {string} url - データを取得するURL。
 * @returns {Promise<any>} - JSONデータで解決されるPromise。
 * @throws {Error} - ネットワークレスポンスがokでない場合にエラーをスローします。
 */
export async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * URLにJSONデータをPOSTします。
 * @param {string} url - データをPOSTするURL。
 * @param {object} data - POSTするデータ。
 * @returns {Promise<any>} - JSONレスポンスで解決されるPromise。
 * @throws {Error} - ネットワークレスポンスがokでない場合にエラーをスローします。
 */
export async function postJSON(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * Checks if the browser is online.
 * @returns {boolean} True if online, false otherwise.
 */
export function isOnline() {
  return navigator.onLine;
}

/**
 * Gets the current network connection type.
 * @returns {string} The network connection type (e.g., 'wifi', 'cellular', 'ethernet', 'none', or 'unknown').
 */
export function getNetworkType() {
  if (navigator.connection && navigator.connection.effectiveType) {
    return navigator.connection.effectiveType;
  }
  return 'unknown';
}

/**
 * Parses URL query parameters into an object.
 * @param {string} url The URL string to parse. Defaults to current window location.
 * @returns {object} An object containing the query parameters.
 */
export function getQueryParams(url = window.location.search) {
  const params = {};
  const queryString = url.startsWith('?') ? url.substring(1) : url;
  queryString.split('&').forEach(pair => {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || '';
    }
  });
  return params;
}
