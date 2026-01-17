export const deepClone = (obj, hash = new WeakMap()) => {
  if (Object(obj) !== obj) return obj; 
  if (hash.has(obj)) return hash.get(obj);

  const result = obj instanceof Date ? new Date(obj)
               : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
               : obj.constructor ? new obj.constructor() 
               : Object.create(null);
  
  hash.set(obj, result);

  if (obj instanceof Map) {
    obj.forEach((val, key) => {
      result.set(deepClone(key, hash), deepClone(val, hash));
    });
    return result;
  }

  return Object.assign(result, ...Object.keys(obj).map(
    key => ({ [key]: deepClone(obj[key], hash) })
  ));
}