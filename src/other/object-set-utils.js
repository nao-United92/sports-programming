const set = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const keys = Array.isArray(path)
    ? path
    : path.toString().replace(/\[(\d+)\]/g, '.$1').split('.').filter(p => p);

  if (keys.length === 0) {
    return Array.isArray(obj) ? [...obj] : { ...obj };
  }

  const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
  let current = newObj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const isLast = i === keys.length - 1;

    if (isLast) {
      current[key] = value;
    } else {
      const nextKey = keys[i + 1];
      const isNextKeyNumeric = /^\d+$/.test(nextKey);
      
      const currentValue = current[key];
      if (currentValue === null || typeof currentValue !== 'object') {
        current[key] = isNextKeyNumeric ? [] : {};
      } else {
        current[key] = Array.isArray(currentValue) ? [...currentValue] : { ...currentValue };
      }
      current = current[key];
    }
  }

  return newObj;
};

module.exports = set;