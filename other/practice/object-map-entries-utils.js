const mapEntries = (obj, mapper) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }
  if (typeof mapper !== 'function') {
    return { ...obj };
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const [newKey, newValue] = mapper(key, value, obj);
    acc[newKey] = newValue;
    return acc;
  }, {});
};

export default mapEntries;