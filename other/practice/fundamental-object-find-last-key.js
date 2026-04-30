/**
 * This method is like findKey except that it iterates over properties of
 * object in the opposite order.
 *
 * @param {Object} obj The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element, else undefined.
 */
function findLastKey(obj, predicate) {
  const keys = Object.keys(obj).reverse();
  for (const key of keys) {
    if (predicate(obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
}

module.exports = findLastKey;
