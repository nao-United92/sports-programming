/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (predicate(object[key], key)) {
        result[key] = object[key];
      }
    }
  }
  return result;
}

export default pickBy;
