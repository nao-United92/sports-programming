/**
 * Converts an object to a URL query string.
 * @param {object} params The object to convert.
 * @returns {string} The resulting query string.
 */
export const objectToQueryString = (params) => {
  if (!params || typeof params !== 'object') {
    return '';
  }
  return Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === undefined) {
        return '';
      }
      if (value === null) {
        return encodeURIComponent(key);
      }
      if (Array.isArray(value)) {
        return value
          .map(v => `${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`)
          .join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(p => p.length > 0)
    .join('&');
};

/**
 * Converts a URL query string to an object.
 * @param {string} queryString The query string to convert.
 * @returns {object} The resulting object.
 */
export const queryStringToObject = (queryString) => {
    const params = {};
    if (!queryString || typeof queryString !== 'string') {
        return params;
    }

    const searchStr = queryString.startsWith('?') ? queryString.substring(1) : queryString;
    if (!searchStr) {
        return params;
    }

    searchStr.split('&').forEach(part => {
        const [key, value] = part.split('=');
        if (!key) return;

        const decodedKey = decodeURIComponent(key);
        const decodedValue = value !== undefined ? decodeURIComponent(value.replace(/\+/g, ' ')) : null;

        if (decodedKey.endsWith('[]')) {
            const cleanKey = decodedKey.slice(0, -2);
            if (!params[cleanKey]) {
                params[cleanKey] = [];
            }
            if (decodedValue !== null) {
                params[cleanKey].push(decodedValue);
            }
        } else {
            if (params[decodedKey]) {
                if (!Array.isArray(params[decodedKey])) {
                    params[decodedKey] = [params[decodedKey]];
                }
                if (decodedValue !== null) {
                    params[decodedKey].push(decodedValue);
                }
            } else {
                params[decodedKey] = decodedValue;
            }
        }
    });
    return params;
};
