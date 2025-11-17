function get(obj, path, defaultValue = undefined) {
  if (obj === null || obj === undefined) {
    return defaultValue;
  }

  // Handle array-like paths and dot notation
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;
  for (const key of pathArray) {
    // Ensure result is not null/undefined before trying to access the next key
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }

  return result;
}

module.exports = {
  get,
};
