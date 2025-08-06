/**
 * Extracts query parameters from a URL string or the current window's URL.
 *
 * @param {string} [url] The URL string to parse. If not provided, uses window.location.search.
 * @returns {object} An object containing the query parameters.
 */
export const getQueryParams = (url) => {
  const urlToParse = url;
  if (!urlToParse) {
    return {}; // If no URL is provided, return empty object
  }
  const queryString = urlToParse.includes('?') ? urlToParse.split('?')[1] : urlToParse;
  const hashIndex = queryString.indexOf('#');
  const cleanQueryString = hashIndex !== -1 ? queryString.substring(0, hashIndex) : queryString;

  const params = {};
  if (cleanQueryString) {
    cleanQueryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=').map(decodeURIComponent);
      params[key] = value;
    });
  }
  return params;
};

/**
 * Adds or updates query parameters in a URL.
 *
 * @param {string} url The base URL.
 * @param {object} params An object containing the parameters to add or update.
 * @returns {string} The URL with updated query parameters.
 */
export const addQueryParams = (url, params) => {
  const [baseUrlWithoutHash, hash] = url.split('#');
  const [mainUrl, existingQueryString] = baseUrlWithoutHash.split('?');
  let existingParams = {};
  if (existingQueryString) {
    existingParams = getQueryParams(`?${existingQueryString}`);
  }

  const newParams = { ...existingParams, ...params };

  const queryString = Object.keys(newParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(newParams[key])}`)
    .join('&');

  let resultUrl = queryString ? `${mainUrl}?${queryString}` : mainUrl;
  if (hash) {
    resultUrl += `#${hash}`;
  }
  return resultUrl;
};