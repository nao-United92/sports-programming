export const objectOmit = (obj, keys) => {
  if (!obj || typeof obj !== 'object') return {};
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};
