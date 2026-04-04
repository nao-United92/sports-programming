const getByPath = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj !== 'object' || typeof path !== 'string') {
    return defaultValue;
  }

  const parts = path.split('.');
  let current = obj;

  for (const part of parts) {
    if (current === null || typeof current !== 'object' || !(part in current)) {
      return defaultValue;
    }
    current = current[part];
  }

  return current === undefined ? defaultValue : current;
};

module.exports = getByPath;
