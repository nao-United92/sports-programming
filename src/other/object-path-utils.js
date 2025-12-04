const stringToPath = (string) => {
  if (typeof string !== 'string') return string;
  // This is a simple implementation. A robust one would handle brackets, quotes, etc.
  return string.replace(/\[/g, '.').replace(/\]/g, '').split('.').filter(Boolean);
};

export const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : stringToPath(path);
  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[pathArray[i]];
  }
  return current === undefined ? defaultValue : current;
};

export const set = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const pathArray = Array.isArray(path) ? path : stringToPath(path);
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (current[key] === null || typeof current[key] !== 'object') {
      const nextKey = pathArray[i + 1];
      // Check if the next key is a number to decide between object or array
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }
  const lastKey = pathArray[pathArray.length - 1];
  if (lastKey !== undefined) {
    current[lastKey] = value;
  }
  return obj;
};