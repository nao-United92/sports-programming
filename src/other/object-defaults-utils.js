/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that resolve
 * to `undefined`. Source objects are applied from left to right.
 *
 * @param {object} object The destination object.
 * @param {...object} sources The source objects.
 * @returns {object} Returns `object`.
 */
export const defaults = (object, ...sources) => {
  object = Object(object);
  sources.forEach((source) => {
    if (source == null) {
      return;
    }
    source = Object(source);
    for (const key in source) {
      const value = object[key];
      if (value === undefined) {
        object[key] = source[key];
      }
    }
  });
  return object;
};