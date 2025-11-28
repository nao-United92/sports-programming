/**
 * Parses a URL's query string into an object.
 * Handles multiple values for the same key by creating an array.
 * @param {string} url The URL to parse.
 * @returns {object} An object representing the query string.
 */
const parseQueryString = (url) => {
  const queryString = url.includes('?') ? url.split('?')[1] : '';
  if (!queryString) {
    return {};
  }
  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const key of params.keys()) {
    const values = params.getAll(key);
    obj[key] = values.length > 1 ? values : values[0];
  }
  return obj;
};

/**
 * Stringifies an object into a URL query string.
 * Ignores null and undefined values.
 * @param {object} obj The object to stringify.
 * @returns {string} The URL query string.
 */
const stringifyQueryString = (obj) => {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => {
            if (v !== null && v !== undefined) {
              params.append(key, v);
            }
          });
        } else {
          params.append(key, value);
        }
      }
    }
  }
  return params.toString();
};

module.exports = { parseQueryString, stringifyQueryString };
