export const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};
