const getNestedProperty = (obj, path, defaultValue) => {
  // Convert path to an array of keys if it's a string
  const keys = Array.isArray(path) ? path : path === '' ? [] : path.split('.');

  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    if (current === null || current === undefined || typeof current !== 'object' || !current.hasOwnProperty(keys[i])) {
      return defaultValue;
    }
    current = current[keys[i]];
  }
  return current;
};

module.exports = getNestedProperty;
