const deepClone = (obj, hash = new WeakMap()) => {
  // Handle the 3 simple types, and null or undefined
  if (obj === null || typeof obj !== 'object') return obj;

  // Handle Date
  if (obj instanceof Date) return new Date(obj);

  // Handle RegExp
  if (obj instanceof RegExp) return new RegExp(obj);

  // Handle circular references
  if (hash.has(obj)) return hash.get(obj);

  let clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
};

module.exports = { deepClone };