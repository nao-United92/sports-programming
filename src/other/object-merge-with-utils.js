
const isObject = (value) => value !== null && typeof value === 'object';

/**
 * This method is like `merge` except that it accepts `customizer` which is
 * invoked to produce the merged values of the properties. If `customizer`
 * returns `undefined`, merging is handled by the method instead. The
 * `customizer` is invoked with five arguments:
 * (objValue, srcValue, key, object, source).
 *
 * @param {object} object The destination object.
 * @param {...object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {object} Returns `object`.
 */
export const mergeWith = (object, ...sourcesAndCustomizer) => {
  const customizer = sourcesAndCustomizer.pop();
  const sources = sourcesAndCustomizer;

  if (!isObject(object)) {
    return object;
  }

  sources.forEach((source) => {
    if (!isObject(source)) {
      return;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const objValue = object[key];
        const srcValue = source[key];

        const customized = customizer(objValue, srcValue, key, object, source);
        if (customized !== undefined) {
          object[key] = customized;
        } else if (isObject(objValue) && isObject(srcValue)) {
          object[key] = mergeWith(objValue, srcValue, customizer);
        } else {
          object[key] = srcValue;
        }
      }
    }
  });
  return object;
};
