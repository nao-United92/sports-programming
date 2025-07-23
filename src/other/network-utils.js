
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
 * Parses URL query parameters into an object.
 * @param {string} url The URL string to parse. Defaults to current window location.
 * @returns {object} An object containing the query parameters.
 */
export function getQueryParams(url) {
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
  if ('getBattery' in navigator && typeof navigator.getBattery === 'function') {
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

/**
 * Initiates a file download from a given URL.
 * @param {string} url The URL of the file to download.
 * @param {string} [filename] The desired filename for the downloaded file. If not provided, derived from URL.
 */
export function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  if (filename) {
    link.download = filename;
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Uploads a file to a specified URL using FormData.
 * @param {string} url The URL to upload the file to.
 * @param {File} file The File object to upload.
 * @param {string} [fieldName='file'] The name of the form field for the file.
 * @returns {Promise<any>} A promise that resolves with the JSON response from the server.
 */
export async function uploadFile(url, file, fieldName = 'file') {
  const formData = new FormData();
  formData.append(fieldName, file);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

