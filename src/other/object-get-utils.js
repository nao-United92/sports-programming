const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

// This is a simplified version. A robust implementation would handle brackets and quotes.
const stringToPath = (string) => {
  return string.replace(/\[(.*?)\]/g, '.$1').split('.');
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (object, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : stringToPath(path);

  let index = 0;
  let length = pathArray.length;
  let current = object;

  while (current != null && index < length) {
    current = current[pathArray[index++]];
  }

  if (index && index === length && current !== undefined) {
    return current;
  }
  return defaultValue;
};

export { get };
