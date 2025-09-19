const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

/**
 * This method is like `defaults` except that it recursively assigns default properties.
 *
 * @param {object} object The destination object.
 * @param {...object} sources The source objects.
 * @returns {object} Returns `object`.
 */
const defaultsDeep = (object, ...sources) => {
  for (const source of sources) {
    if (!source) continue;
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const value = object[key];
        if (value === undefined || (isObject(value) && !Object.prototype.hasOwnProperty.call(object, key))) {
          const sourceValue = source[key];
          if (isObject(value) && isObject(sourceValue)) {
            object[key] = defaultsDeep(value, sourceValue);
          } else {
            object[key] = sourceValue;
          }
        } else if (isObject(value) && isObject(source[key])) {
            defaultsDeep(value, source[key]);
        }
      }
    }
  }
  return object;
};

export { defaultsDeep };