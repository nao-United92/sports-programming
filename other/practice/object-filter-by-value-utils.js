const filterByValue = (obj, predicate) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }
  if (typeof predicate !== 'function') {
    return { ...obj };
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (predicate(obj[key], key, obj)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

export default filterByValue;