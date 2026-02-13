/**
 * Recursively deep clones an object, safely handling circular references.
 *
 * @param {*} obj The object to deep clone.
 * @param {WeakMap} [hash=new WeakMap()] Used internally for circular references.
 * @returns {*} A deep clone of the object.
 */
const deepCloneCircular = (obj, hash = new WeakMap()) => {
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

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy); // Mark as seen before processing children
    obj.forEach((item, index) => {
      arrCopy[index] = deepCloneCircular(item, hash);
    });
    return arrCopy;
  }

  // Handle Object
  const objCopy = {};
  hash.set(obj, objCopy); // Mark as seen before processing children
  Object.keys(obj).forEach(key => {
    objCopy[key] = deepCloneCircular(obj[key], hash);
  });
  return objCopy;
};

export default deepCloneCircular;