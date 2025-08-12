export const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};