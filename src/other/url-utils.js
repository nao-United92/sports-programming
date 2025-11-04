/**
 * Parses a URL query string into an object.
 *
 * @param {string} url The URL to parse.
 * @returns {object} An object containing the query parameters.
 */
export const parseQuery = (url) => {
  const queryString = url.includes('?') ? url.split('?')[1] : '';
  if (!queryString) {
    return {};
  }

  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
};
