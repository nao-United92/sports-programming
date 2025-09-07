/**
 * Gets the value of a specified URL query parameter.
 * @param {string} param The name of the query parameter.
 * @param {string} [url=window.location.href] The URL to parse. Defaults to current window location.
 * @returns {string|null} The value of the parameter, or null if not found.
 */
export const getURLParam = (param, url = window.location.href) => {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get(param);
};

/**
 * Sets or updates a URL query parameter.
 * @param {string} param The name of the query parameter.
 * @param {string} value The value to set for the parameter.
 * @param {string} [url=window.location.href] The URL to modify. Defaults to current window location.
 * @returns {string} The modified URL string.
 */
export const setURLParam = (param, value, url = window.location.href) => {
  const urlObj = new URL(url);
  urlObj.searchParams.set(param, value);
  return urlObj.toString();
};

/**
 * Removes a specified URL query parameter.
 * @param {string} param The name of the query parameter to remove.
 * @param {string} [url=window.location.href] The URL to modify. Defaults to current window location.
 * @returns {string} The modified URL string.
 */
export const removeURLParam = (param, url = window.location.href) => {
  const urlObj = new URL(url);
  urlObj.searchParams.delete(param);
  return urlObj.toString();
};
