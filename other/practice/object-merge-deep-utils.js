/**
 * Recursively merges properties of one or more source objects into a target object.
 *
 * @param {Object} target The object to merge into.
 * @param {...Object} sources The source objects to merge from.
 * @returns {Object} The merged target object.
 */
function mergeDeep(target, ...sources) {
  if (!target || typeof target !== 'object' || Array.isArray(target)) {
    target = {};
  }

  for (const source of sources) {
    if (source && typeof source === 'object' && !Array.isArray(source)) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
              target[key] = {};
            }
            mergeDeep(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }
  }
  return target;
}

module.exports = mergeDeep;
