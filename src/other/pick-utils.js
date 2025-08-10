export const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = {};
  const keysToPick = Array.isArray(keys) ? keys : [keys];

  for (const key of keysToPick) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};