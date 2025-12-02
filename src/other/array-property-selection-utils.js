/**
 * Creates an array of objects with properties picked from the original objects.
 * @param {Array<Object>} arr The source array of objects.
 * @param {Array<string>} keys The properties to pick.
 * @returns {Array<Object>} The new array of objects.
 */
const pick = (arr, keys) => {
  if (!Array.isArray(arr) || !Array.isArray(keys)) return [];
  return arr.map(obj =>
    keys.reduce((acc, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        acc[key] = obj[key];
      }
      return acc;
    }, {})
  );
};

/**
 * Creates an array of objects with properties omitted from the original objects.
 * @param {Array<Object>} arr The source array of objects.
 * @param {Array<string>} keys The properties to omit.
 * @returns {Array<Object>} The new array of objects.
 */
const omit = (arr, keys) => {
  if (!Array.isArray(arr) || !Array.isArray(keys)) return [];
  const keysToOmit = new Set(keys);
  return arr.map(obj => {
    if (!obj || typeof obj !== 'object') return {};
    const newObj = { ...obj };
    keysToOmit.forEach(key => {
      delete newObj[key];
    });
    return newObj;
  });
};

module.exports = { pick, omit };
