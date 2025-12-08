const get = (obj, path, defaultValue) => {
  // Coerce path to an array of keys.
  // Handles 'a.b', 'a[0].b', ['a', '0', 'b']
  const keys = Array.isArray(path)
    ? path
    : path.toString().replace(/\[/g, '.').replace(/\]/g, '').split('.').filter(Boolean);

  // If path is empty, return the object or default value if object is undefined.
  if (keys.length === 0) {
    return obj === undefined ? defaultValue : obj;
  }

  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    // If at any point the result is not an object (or is null), the path is invalid.
    if (typeof result !== 'object' || result === null) {
      return defaultValue;
    }
    result = result[keys[i]];
  }

  return result === undefined ? defaultValue : result;
};

module.exports = get;