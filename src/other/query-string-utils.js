/**
 * Parses a query string into an object.
 * @param {string} str The query string to parse.
 * @returns {object} The parsed object.
 */
export function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }
  const s = str.trim().replace(/^[?#&]/, '');
  if (!s) {
    return {};
  }
  return s.split('&').reduce((acc, param) => {
    const eqIndex = param.indexOf('=');
    let key, value;
    if (eqIndex === -1) {
      key = param;
      value = undefined;
    } else {
      key = param.slice(0, eqIndex);
      value = param.slice(eqIndex + 1);
    }
    acc[decodeURIComponent(key)] = value === undefined ? null : decodeURIComponent(value.replace(/\+/g, ' '));
    return acc;
  }, {});
}

/**
 * Stringifies an object into a query string.
 * @param {object} obj The object to stringify.
 * @returns {string} The resulting query string.
 */
export function stringify(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return '';
  }
  return Object.keys(obj)
    .map(key => {
      const value = obj[key];
      if (value === undefined) {
        return '';
      }
      if (value === null) {
        return encodeURIComponent(key);
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join('&');
}

/**
 * Updates or adds query parameters to an existing query string.
 * @param {string} queryString The original query string.
 * @param {object} params The parameters to update or add.
 * @returns {string} The updated query string.
 */
export function updateQueryString(queryString, params) {
  const parsed = parse(queryString);
  const updated = { ...parsed, ...params };
  return stringify(updated);
}

/**
 * Removes specified query parameters from a query string.
 * @param {string} queryString The original query string.
 * @param {string[]} paramsToRemove An array of parameter names to remove.
 * @returns {string} The query string with specified parameters removed.
 */
export function removeQueryString(queryString, paramsToRemove) {
  const parsed = parse(queryString);
  paramsToRemove.forEach(param => {
    delete parsed[param];
  });
  return stringify(parsed);
}
