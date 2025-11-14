/**
 * Updates, adds, or removes query parameters from a given URL string.
 *
 * @param {string} url The original URL string.
 * @param {object} [paramsToUpdate={}] An object where keys are parameter names and values are their new values.
 *                                      If a value is `null` or `undefined`, the parameter will be removed.
 * @param {string[]} [paramsToRemove=[]] An array of parameter names to explicitly remove.
 * @returns {string} A new URL string with the updated query parameters.
 */
export const updateQueryParams = (url, paramsToUpdate = {}, paramsToRemove = []) => {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;

  // Remove parameters explicitly listed in paramsToRemove
  paramsToRemove.forEach(param => {
    searchParams.delete(param);
  });

  // Add or update parameters from paramsToUpdate
  for (const key in paramsToUpdate) {
    if (Object.prototype.hasOwnProperty.call(paramsToUpdate, key)) {
      const value = paramsToUpdate[key];
      if (value === null || typeof value === 'undefined') {
        searchParams.delete(key);
      } else {
        searchParams.set(key, String(value));
      }
    }
  }

  urlObj.search = searchParams.toString();
  return urlObj.toString();
};
