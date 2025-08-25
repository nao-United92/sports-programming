/**
 * Parses a URL query string into an object.
 * @param {string} str The URL query string to parse (e.g., 'key=value&key2=value2').
 * @returns {Object} The object representation of the query string.
 */
export const parse = (str) => {
  const result = {};
  if (typeof str !== 'string') {
    return result;
  }

  const cleanStr = str.trim().replace(/^[?#&]/, '');

  if (!cleanStr) {
    return result;
  }

  for (const param of cleanStr.split('&')) {
    let [key, value] = param.split('=');
    if (key === undefined || key === '') continue;

    key = decodeURIComponent(key);
    const decodedValue = value === undefined ? null : decodeURIComponent(value.replace(/\+/g, ' '));

    if (result[key] === undefined) {
      result[key] = decodedValue;
    } else {
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      result[key].push(decodedValue);
    }
  }
  return result;
};

/**
 * Stringifies an object into a URL query string.
 * @param {Object} obj The object to stringify.
 * @returns {string} The URL query string.
 */
export const stringify = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return '';
  }

  return Object.keys(obj).map(key => {
    const value = obj[key];
    const encodedKey = encodeURIComponent(key);

    if (value === null || value === undefined) {
      return encodedKey;
    }

    if (Array.isArray(value)) {
      return value.map(v => `${encodedKey}=${encodeURIComponent(v)}`).join('&');
    }

    return `${encodedKey}=${encodeURIComponent(value)}`;
  }).filter(Boolean).join('&');
};
