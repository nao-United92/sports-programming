/**
 * Converts a URL's query string or a query string itself into an object.
 * @param {string} input The URL or query string.
 * @returns {object} An object representation of the query string.
 */
function queryStringToObject(input) {
  const search = input.includes('?') ? input.substring(input.indexOf('?')) : input;
  const searchParams = new URLSearchParams(search);
  const queryObject = {};
  for (const [key, value] of searchParams.entries()) {
    if (queryObject.hasOwnProperty(key)) {
      if (Array.isArray(queryObject[key])) {
        queryObject[key].push(value);
      } else {
        queryObject[key] = [queryObject[key], value];
      }
    } else {
      queryObject[key] = value;
    }
  }
  return queryObject;
}

module.exports = { queryStringToObject };