/**
 * Converts a query string into an object.
 *
 * @param {string} queryString The query string to parse.
 * @returns {Object} The object representation of the query string.
 */
function queryStringToObject(queryString) {
  if (queryString == null || queryString.trim() === '') {
    return {};
  }

  const str = queryString.startsWith('?') ? queryString.slice(1) : queryString;

  if (str === '') {
    return {};
  }

  return str.split('&').reduce((acc, pair) => {
    // In case of a key with no value, e.g., "foo" instead of "foo=bar"
    const [key, value] = pair.includes('=') ? pair.split('=') : [pair, ''];
    const decodedKey = decodeURIComponent(key);
    const decodedValue = value === undefined ? '' : decodeURIComponent(value);

    if (decodedKey === '') return acc;

    if (Object.prototype.hasOwnProperty.call(acc, decodedKey)) {
      if (Array.isArray(acc[decodedKey])) {
        acc[decodedKey].push(decodedValue);
      } else {
        acc[decodedKey] = [acc[decodedKey], decodedValue];
      }
    } else {
      acc[decodedKey] = decodedValue;
    }
    return acc;
  }, {});
}

export default queryStringToObject;
