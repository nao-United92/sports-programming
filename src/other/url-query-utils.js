/**
 * Parses a URL query string into an object.
 *
 * @param {string} url The URL to parse.
 * @returns {object} An object representing the query string.
 */
export const parseQuery = (url) => {
  const queryString = url.includes('?') ? url.split('?')[1] : '';
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }
  return result;
};

/**
 * Converts an object to a URL query string.
 *
 * @param {object} obj The object to convert.
 * @returns {string} The URL query string.
 */
export const stringifyQuery = (obj) => {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach(v => params.append(key, v));
      } else {
        params.append(key, value);
      }
    }
  }
  return params.toString();
};