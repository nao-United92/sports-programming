const setByPath = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object' || typeof path !== 'string') {
    return obj;
  }

  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current) || current[part] === null || typeof current[part] !== 'object') {
      // If the part is a number-like string, we create an array, otherwise an object
      const nextPart = parts[i + 1];
      const isNextPartNumber = /^\d+$/.test(nextPart);
      current[part] = isNextPartNumber ? [] : {};
    }
    current = current[part];
  }

  current[parts[parts.length - 1]] = value;
  return obj;
};

module.exports = setByPath;
