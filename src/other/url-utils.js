/**
 * Gets a specific query parameter from a URL.
 *
 * @param url The URL string.
 * @param paramName The name of the query parameter to get.
 * @returns The value of the query parameter, or null if not found.
 */
export function getQueryParam(url, paramName) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get(paramName);
}

/**
 * Adds or updates a query parameter in a URL.
 *
 * @param url The original URL string.
 * @param paramName The name of the query parameter to add or update.
 * @param paramValue The value of the query parameter.
 * @returns The new URL string with the updated query parameter.
 */
export function setQueryParam(url, paramName, paramValue) {
    const urlObj = new URL(url);
    urlObj.searchParams.set(paramName, paramValue);
    return urlObj.toString();
}

/**
 * Removes a specific query parameter from a URL.
 *
 * @param url The original URL string.
 * @param paramName The name of the query parameter to remove.
 * @returns The new URL string with the query parameter removed.
 */
export function removeQueryParam(url, paramName) {
    const urlObj = new URL(url);
    urlObj.searchParams.delete(paramName);
    return urlObj.toString();
}

/**
 * Checks if a URL is an absolute URL.
 *
 * @param url The URL string to check.
 * @returns True if the URL is absolute, false otherwise.
 */
export function isAbsoluteUrl(url) {
    try {
        return new URL(url).origin !== 'null';
    } catch (e) {
        return false;
    }
}

/**
 * Adds multiple query parameters to a URL.
 * @param {string} url The original URL string.
 * @param {object} params An object of query parameter key-value pairs.
 * @returns {string} The new URL string with the added query parameters.
 */
export function addQueryParams(url, params) {
  const urlObj = new URL(url);
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      urlObj.searchParams.append(key, params[key]);
    }
  }
  return urlObj.toString();
}

/**
 * Combines a base URL and a relative URL into a single URL.
 * @param {string} baseURL The base URL.
 * @param {string} relativeURL The relative URL.
 * @returns {string} The combined URL.
 */
export function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Extracts the domain from a given URL.
 * @param {string} url The URL string.
 * @returns {string|null} The domain of the URL, or null if invalid.
 */
export function getDomainFromUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (e) {
    return null;
  }
}

/**
 * Checks if a given URL is an absolute URL.
 * @param {string} url The URL string to check.
 * @returns {boolean} True if the URL is absolute, false otherwise.
 */
export function isAbsolute(url) {
  if (typeof url !== 'string') {
    return false;
  }
  // Regular expression to check for absolute URLs, including protocol-relative ones
  return /^(?:[a-z]+:)?\/\//i.test(url);
}

/**
 * Gets the fragment (hash) from a URL.
 * @param {string} url The URL string.
 * @returns {string} The fragment, including the #, or an empty string if no fragment.
 */
export function getFragment(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hash;
  } catch (e) {
    return '';
  }
}

/**
 * Sets or updates the fragment (hash) of a URL.
 * @param {string} url The original URL string.
 * @param {string} fragment The fragment to set (without the #).
 * @returns {string} The new URL string with the updated fragment.
 */
export function setFragment(url, fragment) {
  try {
    const urlObj = new URL(url);
    urlObj.hash = fragment;
    return urlObj.toString();
  } catch (e) {
    return url;
  }
}

/**
 * Removes the fragment (hash) from a URL.
 * @param {string} url The original URL string.
 * @returns {string} The new URL string with the fragment removed.
 */
export function removeFragment(url) {
  try {
    const urlObj = new URL(url);
    urlObj.hash = '';
    return urlObj.toString();
  } catch (e) {
    return url;
  }
}
