export const omit = (obj, keys) => {
  if (!obj) return {};
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};
