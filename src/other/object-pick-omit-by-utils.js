/**
 * Creates an object composed of the object properties predicate returns truthy for.
 *
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
export function pickBy(object, predicate) {
  const obj = {};
  if (object == null) {
    return obj;
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key], key)) {
      obj[key] = object[key];
    }
  }
  return obj;
}

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
export function omitBy(object, predicate) {
  const obj = {};
  if (object == null) {
    return obj;
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !predicate(object[key], key)) {
      obj[key] = object[key];
    }
  }
  return obj;
}
