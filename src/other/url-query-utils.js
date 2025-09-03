/**
 * Parses a URL query string into an object.
 *
 * @param {string} queryString The URL query string to parse.
 * @returns {Object} An object representing the query string.
 */
const parseQuery = (queryString) => {
  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    if (obj[key]) {
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

/**
 * Stringifies an object into a URL query string.
 *
 * @param {Object} obj The object to stringify.
 * @returns {string} The URL query string.
 */
const stringifyQuery = (obj) => {
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

module.exports = { parseQuery, stringifyQuery };