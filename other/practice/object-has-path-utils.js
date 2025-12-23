const hasPath = (obj, path) => {
  if (obj == null) return false;
  const pathArray = Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.').filter(Boolean);

  let current = obj;
  for (const key of pathArray) {
    if (typeof current !== 'object' || current === null || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }
  return true;
};

module.exports = hasPath;