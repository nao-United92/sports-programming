export const pick = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

export const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const result = {};
  const keySet = new Set(keys);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keySet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};