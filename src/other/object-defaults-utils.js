/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object for all destination properties that resolve to `undefined`.
 * Source properties are iterated toward right.
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */
export const defaults = (object, ...sources) => {
  object = object == null ? {} : Object(object);
  sources.forEach(source => {
    if (source != null) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key) && object[key] === undefined) {
          object[key] = source[key];
        }
      }
    }
  });
  return object;
};
