/**
 * Builds a URL with query parameters from an object.
 * @param {string} baseUrl The base URL.
 * @param {object} params An object of query parameters.
 * @returns {string} The full URL with query string.
 */
export const buildUrl = (baseUrl, params) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach(v => url.searchParams.append(key, v));
    } else if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};
