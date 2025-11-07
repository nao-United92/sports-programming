/**
 * Parses the query parameters from a given URL string or the current window location.
 *
 * @param {string} [url=window.location.search] The URL string to parse. Defaults to current window.location.search.
 * @returns {object} An object containing the parsed query parameters.
 */
export const parseQueryParams = (url) => {
  const queryString = url || window.location.search;
  const params = {};

  if (queryString) {
    // Remove '?' if present at the beginning
    const searchParams = new URLSearchParams(queryString.startsWith('?') ? queryString.substring(1) : queryString);

    for (const [key, value] of searchParams.entries()) {
      // If key already exists, convert to array
      if (params[key]) {
        if (!Array.isArray(params[key])) {
          params[key] = [params[key]];
        }
        params[key].push(value);
      } else {
        params[key] = value;
      }
    }
  }
  return params;
};
