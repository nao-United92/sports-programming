const set = (obj, path, value) => {
  const pathParts = Array.isArray(path)
    ? path
    : path.split(/[.\[\]]/).filter(Boolean);
  let current = obj;

  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (typeof current[part] !== 'object' || current[part] === null) {
      current[part] = /^\d+$/.test(pathParts[i + 1]) ? [] : {};
    }
    current = current[part];
  }

  current[pathParts[pathParts.length - 1]] = value;
  return obj;
};

module.exports = { set };
