/**
 * Parses a URL query string into an object.
 * @param {string} queryString The URL query string (e.g., '?foo=bar&baz=qux').
 * @returns {Object} The parsed query parameters as an object.
 */
export const parseQuery = (queryString) => {
  const params = {};
  const searchParams = new URLSearchParams(queryString);
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
};

/**
 * Stringifies an object into a URL query string.
 * @param {Object} params The object to stringify.
 * @returns {string} The URL query string.
 */
export const stringifyQuery = (params) => {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      searchParams.append(key, params[key]);
    }
  }
  return searchParams.toString();
};
