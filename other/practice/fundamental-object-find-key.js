/**
 * This method is like find except that it returns the key of the first element
 * predicate returns truthy for instead of the element itself.
 *
 * @param {Object} obj The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element, else undefined.
 */
function findKey(obj, predicate) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (predicate(obj[key], key, obj)) {
        return key;
      }
    }
  }
  return undefined;
}

module.exports = findKey;
