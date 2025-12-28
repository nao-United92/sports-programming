function cloneDeep(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // Primitives
  if (hash.has(obj)) return hash.get(obj); // Cyclic reference
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  
  const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  
  hash.set(obj, result);
  
  return Object.assign(result, ...Object.keys(obj).map(
    key => ({ [key]: cloneDeep(obj[key], hash) })
  ));
}

module.exports = { cloneDeep };
