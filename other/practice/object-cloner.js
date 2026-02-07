const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle circular reference
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let objCopy;

  if (Array.isArray(obj)) {
    objCopy = [];
    hash.set(obj, objCopy); // Store copy before cloning children
    for (let i = 0; i < obj.length; i++) {
      objCopy[i] = deepClone(obj[i], hash);
    }
    return objCopy;
  }

  if (obj instanceof Date) {
    objCopy = new Date(obj.getTime());
    hash.set(obj, objCopy);
    return objCopy;
  }

  if (obj instanceof RegExp) {
    objCopy = new RegExp(obj);
    hash.set(obj, objCopy);
    return objCopy;
  }

  objCopy = {};
  hash.set(obj, objCopy); // Store copy before cloning children
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = deepClone(obj[key], hash);
    }
  }
  return objCopy;
};

module.exports = { deepClone };
