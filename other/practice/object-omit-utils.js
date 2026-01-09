export const omit = (obj, ...keys) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
