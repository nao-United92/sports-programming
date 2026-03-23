// Pick specific keys from an object
export const pick = (object, keys) => {
  if (!object || typeof object !== 'object') return {};
  if (!Array.isArray(keys)) return {};
  
  return keys.reduce((acc, key) => {
    if (key in object) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
};
