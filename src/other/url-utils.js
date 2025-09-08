/**
 * Converts a URL's query string into an object.
 * Requires a full URL to be passed.
 * @param {string} url The URL to parse.
 * @returns {Object} An object representing the query parameters.
 */
const paramsToObject = (url) => {
  const params = new URL(url).searchParams;
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
 * Converts an object to a URL query string.
 * @param {Object} obj The object to convert.
 * @returns {string} The URL query string.
 */
const objectToParams = (obj) => {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach(v => params.append(key, v));
      } else if (value !== undefined && value !== null) {
        params.append(key, value);
      }
    }
  }
  return params.toString();
};

module.exports = { paramsToObject, objectToParams };
