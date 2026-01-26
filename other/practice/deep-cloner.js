const deepClone = (obj, hash = new WeakMap()) => {
  if (Object(obj) !== obj) return obj; // Primitives
  if (hash.has(obj)) return hash.get(obj); // Cyclic reference
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

  const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  
  hash.set(obj, result);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key], hash);
    }
  }
  
  return result;
};

module.exports = { deepClone };
