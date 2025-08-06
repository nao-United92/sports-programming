
/**
 * Converts an object to a query string.
 *
 * @param {object} obj The object to convert.
 * @returns {string} The query string.
 */
export const objectToQueryString = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return '';
  }
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
};

/**
 * Converts a query string to an object.
 *
 * @param {string} queryString The query string to convert.
 * @returns {object} The object.
 */
export const queryStringToObject = (queryString) => {
  if (typeof queryString !== 'string') {
    return {};
  }
  return (queryString || '').split('&').reduce((acc, curr) => {
    if (curr === '') return acc;
    const [key, value] = curr.split('=');
    acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
    return acc;
  }, {});
};
