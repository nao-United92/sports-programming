export const pick = (obj, ...keys) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
