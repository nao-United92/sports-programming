const set = (obj, path, value) => {
  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length - 1; i++) {
    const key = pathParts[i];
    if (typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }

  current[pathParts[pathParts.length - 1]] = value;
  return obj;
};

module.exports = { set };