const getOrDefault = (obj, path, defaultValue) => {
  if (obj == null) return defaultValue;

  const pathArray = Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.').filter(Boolean);

  let current = obj;
  for (const key of pathArray) {
    if (typeof current !== 'object' || current === null || !Object.prototype.hasOwnProperty.call(current, key)) {
      return defaultValue;
    }
    current = current[key];
  }
  return current;
};

module.exports = getOrDefault;
