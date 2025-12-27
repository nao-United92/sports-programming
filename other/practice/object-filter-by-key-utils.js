const filterByKey = (obj, predicate) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }
  if (typeof predicate !== 'function') {
    return { ...obj };
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (predicate(key, obj[key], obj)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

export default filterByKey;