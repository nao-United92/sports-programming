/**
 * Parses the query parameters from a given URL string or the current window location.
 * @param {string} [url=window.location.search] The URL string to parse. Defaults to current window location search.
 * @returns {Object} An object containing the parsed query parameters.
 */
export function getQueryParams(url) {
  const queryString = url ? url.split('?')[1] : window.location.search.substring(1);
  const params = {};
  if (queryString) {
    queryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=').map(decodeURIComponent);
      params[key] = value || '';
    });
  }
  return params;
}

/**
 * Adds or updates query parameters in a given URL string.
 * @param {string} url The base URL string.
 * @param {Object} paramsToAdd An object containing the query parameters to add or update.
 * @returns {string} The URL string with the updated query parameters.
 */
export function addQueryParams(url, paramsToAdd) {
  const [baseUrl, hash] = url.split('#');
  const [mainUrl, queryString] = baseUrl.split('?');
  const existingParams = getQueryParams(queryString ? '?' + queryString : '');
  const newParams = { ...existingParams, ...paramsToAdd };

  const newQueryString = Object.keys(newParams)
    .map(key => {
      const value = newParams[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');

  let resultUrl = mainUrl;
  if (newQueryString) {
    resultUrl += `?${newQueryString}`;
  }
  if (hash) {
    resultUrl += `#${hash}`;
  }
  return resultUrl;
}