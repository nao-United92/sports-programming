
const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

/**
 * This method is like `defaults` except that it recursively assigns
 * default properties.
 *
 * @param {object} object The destination object.
 * @param {...object} sources The source objects.
 * @returns {object} Returns `object`.
 */
export const defaultsDeep = (object, ...sources) => {
  object = Object(object);
  sources.forEach((source) => {
    if (source == null) {
      return;
    }
    source = Object(source);
    for (const key in source) {
      const value = object[key];
      const sourceValue = source[key];
      if (value === undefined) {
        object[key] = sourceValue;
      } else if (isObject(value) && isObject(sourceValue)) {
        defaultsDeep(value, sourceValue);
      }
    }
  });
  return object;
};
