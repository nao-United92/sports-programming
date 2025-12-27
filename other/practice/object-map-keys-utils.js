const mapKeys = (obj, mapper) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  if (typeof mapper !== 'function') {
    return { ...obj };
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = mapper(key, obj[key]);
    acc[newKey] = obj[key];
    return acc;
  }, {});
};

export default mapKeys;