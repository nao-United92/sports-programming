/**
 * Updates or adds a query parameter to a URL.
 * @param {string} url The original URL.
 * @param {string} key The parameter key.
 * @param {string} value The parameter value.
 * @returns {string} The updated URL.
 */
export const updateQueryParam = (url, key, value) => {
  const urlObj = new URL(url);
  urlObj.searchParams.set(key, value);
  return urlObj.toString();
};

/**
 * Removes a query parameter from a URL.
 * @param {string} url The original URL.
 * @param {string} key The parameter key to remove.
 * @returns {string} The updated URL.
 */
export const removeQueryParam = (url, key) => {
  const urlObj = new URL(url);
  urlObj.searchParams.delete(key);
  return urlObj.toString();
};
