const isObject = (value) => value !== null && typeof value === 'object';

/**
 * Recursively merges own and inherited enumerable string keyed properties of
 * source objects into the destination object. Source objects are applied
 * from left to right. Subsequent sources overwrite property assignments of
 * previous sources.
 *
 * @param {object} object The destination object.
 * @param {...object} sources The source objects.
 * @returns {object} Returns `object`.
 */
export const merge = (object, ...sources) => {
  if (!isObject(object)) {
    return object;
  }

  sources.forEach((source) => {
    if (!isObject(source)) {
      return;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (isObject(object[key]) && isObject(source[key])) {
          object[key] = merge(object[key], source[key]);
        } else {
          object[key] = source[key];
        }
      }
    }
  });
  return object;
};