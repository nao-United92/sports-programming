export const pick = (obj, keys) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
