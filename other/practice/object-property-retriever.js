export const getProperty = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj !== 'object' || typeof path !== 'string') {
    return defaultValue;
  }

  const pathKeys = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');
  
  let current = obj;
  for (const key of pathKeys) {
    if (current === null || typeof current !== 'object' || !(key in current)) {
      return defaultValue;
    }
    current = current[key];
  }

  return current;
};
