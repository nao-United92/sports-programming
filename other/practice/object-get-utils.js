const get = (obj, path, defaultValue) => {
  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    if (current === null || typeof current === 'undefined') {
      return defaultValue;
    }
    current = current[pathParts[i]];
  }

  return current === null || typeof current === 'undefined' ? defaultValue : current;
};

module.exports = { get };