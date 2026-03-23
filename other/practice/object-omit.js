// Omit specific keys from an object
export const omit = (object, keys) => {
  if (!object || typeof object !== 'object') return {};
  if (!Array.isArray(keys)) return { ...object };

  const result = { ...object };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};
