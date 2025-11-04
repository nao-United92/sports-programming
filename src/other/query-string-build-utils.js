
/**
 * Builds a URL query string from an object of parameters.
 *
 * @param {object} params The object of parameters.
 * @returns {string} The URL query string.
 */
export const buildQueryString = (params) => {
  if (!params) {
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
        return value.map(v => `${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`).join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(part => part.length > 0)
    .join('&');
};
