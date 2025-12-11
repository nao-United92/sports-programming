const get = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj === 'undefined') {
    return defaultValue;
  }

  const pathParts = Array.isArray(path)
    ? path
    : path.split('.').filter(part => part.length); // Handle string paths and empty parts

  let current = obj;
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (typeof current !== 'object' || current === null || !current.hasOwnProperty(part)) {
      return defaultValue;
    }
    current = current[part];
  }

  return (typeof current === 'undefined') ? defaultValue : current;
};

module.exports = get;
