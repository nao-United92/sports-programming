/**
 * Parses a URL query string into an object.
 * @param {string} url The URL or query string.
 * @returns {object} The parsed query object.
 */
export const parseQuery = (url) => {
  const queryString = url.includes('?') ? url.split('?')[1] : (url.includes('=') ? url : '');
  if (!queryString) {
    return {};
  }
  return queryString.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[decodeURIComponent(key)] = value ? decodeURIComponent(value) : true;
    return acc;
  }, {});
};