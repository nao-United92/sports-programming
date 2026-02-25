export const objectPick = (obj, keys) => {
  if (!obj || typeof obj !== 'object') return {};
  const result = {};
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  });
  return result;
};
