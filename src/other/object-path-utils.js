const get = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj !== 'object') {
    return defaultValue;
  }

  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !current.hasOwnProperty(part)) {
      return defaultValue;
    }
    current = current[part];
  }
  return current;
};

const set = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (current[part] === null || typeof current[part] !== 'object' || !current.hasOwnProperty(part)) {
      current[part] = {};
    }
    current = current[part];
  }
  current[pathParts[pathParts.length - 1]] = value;
  return obj;
};

module.exports = { get, set };
