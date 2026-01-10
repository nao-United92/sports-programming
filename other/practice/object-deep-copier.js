const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj); // Handle circular references
  }

  // Handle Date and RegExp objects
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  let clone;
  if (Array.isArray(obj)) {
    clone = [];
    hash.set(obj, clone); // Store clone in hash before deep cloning children
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], hash);
    }
  } else {
    clone = {};
    hash.set(obj, clone); // Store clone in hash before deep cloning children
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key], hash);
      }
    }
  }
  return clone;
};

module.exports = { deepClone };
