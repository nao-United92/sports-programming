/**
 * Converts an object to a URL query string.
 *
 * @param {object} obj The object to convert.
 * @returns {string} The URL query string.
 */
export const objectToQueryString = (obj) => {
  if (obj === null || typeof obj !== 'object') {
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
      if (Array.isArray(value)) {
        return value
          .map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
          .join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join('&');
};
