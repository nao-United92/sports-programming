export const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = { ...obj };
  const keysToOmit = Array.isArray(keys) ? keys : [keys];

  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
};
