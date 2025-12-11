const deepClone = (obj, hash = new WeakMap()) => {
  // Handle the 3 simple types, and null or undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let clone;
  if (Array.isArray(obj)) {
    clone = [];
    hash.set(obj, clone); // Store clone before populating to handle circular refs in arrays
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], hash);
    }
  } else {
    clone = {};
    hash.set(obj, clone); // Store clone before populating to handle circular refs in objects
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key], hash);
      }
    }
  }

  return clone;
};

module.exports = deepClone;
