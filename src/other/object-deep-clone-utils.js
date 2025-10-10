/**
 * Recursively clones `value`.
 *
 * @param {*} value The value to deep clone.
 * @returns {*} Returns the deep cloned value.
 */
function deepClone(value, hash = new WeakMap()) {
  // Handle the 3 simple types, and null or undefined
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle circular references
  if (hash.has(value)) {
    return hash.get(value);
  }

  let copy;

  // Handle Date
  if (value instanceof Date) {
    copy = new Date(value.getTime());
  }
  // Handle RegExp
  else if (value instanceof RegExp) {
    copy = new RegExp(value);
  }
  // Handle Map
  else if (value instanceof Map) {
    copy = new Map();
    hash.set(value, copy);
    value.forEach((val, key) => {
      copy.set(deepClone(key, hash), deepClone(val, hash));
    });
    return copy;
  }
  // Handle Set
  else if (value instanceof Set) {
    copy = new Set();
    hash.set(value, copy);
    value.forEach(val => {
      copy.add(deepClone(val, hash));
    });
    return copy;
  }
  // Handle Array
  else if (Array.isArray(value)) {
    copy = [];
    hash.set(value, copy);
    for (let i = 0; i < value.length; i++) {
      copy[i] = deepClone(value[i], hash);
    }
    return copy;
  }
  // Handle Object
  else if (typeof value === 'object') {
    copy = {};
    hash.set(value, copy);
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        copy[key] = deepClone(value[key], hash);
      }
    }
  }
  // Handle other types like Function, Symbol, etc. by returning them directly
  else {
    return value;
  }

  return copy;
}

module.exports = { deepClone };
