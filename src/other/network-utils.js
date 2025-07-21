
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

/**
 * Checks if a given URL is valid.
 * @param {string} url The URL string to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Pings a URL by sending an HTTP HEAD request.
 * @param {string} url The URL to ping.
 * @param {number} [timeout=5000] The timeout in milliseconds.
 * @returns {Promise<boolean>} True if the URL is reachable, false otherwise.
 */
export async function ping(url, timeout = 5000) {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
    });
    clearTimeout(id);
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Gets the current battery level of the device.
 * @returns {Promise<number|undefined>} A promise that resolves with the battery level (0-1), or undefined if not available.
 */
export async function getBatteryLevel() {
  if ('getBattery' in navigator) {
    const battery = await navigator.getBattery();
    return battery.level;
  }
  return undefined;
}

/**
 * Gets the estimated download speed of the user's connection in Mbps.
 * @returns {number|undefined} The estimated download speed, or undefined if not available.
 */
export function getBandwidth() {
  if (navigator.connection && navigator.connection.downlink) {
    return navigator.connection.downlink;
  }
  return undefined;
}

