/**
 * Performs a deep clone of an object, handling nested objects, arrays, and circular references.
 * @param {*} obj The object to clone.
 * @param {WeakMap} hash The map of already cloned objects to prevent infinite loops in circular references.
 * @returns {*} The cloned object.
 */
function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // Primitives
  if (hash.has(obj)) return hash.get(obj); // Circular reference

  const result = obj instanceof Date ? new Date(obj)
               : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
               : obj.constructor ? new obj.constructor()
               : Object.create(null);

  hash.set(obj, result);

  return Object.assign(result, ...Object.keys(obj).map(
    key => ({ [key]: deepClone(obj[key], hash) })
  ));
}

module.exports = { deepClone };
