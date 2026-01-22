export const pick = (obj, keys) => {
  if (!obj || typeof obj !== 'object' || !Array.isArray(keys)) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
