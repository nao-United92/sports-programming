const getDeep = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj === 'undefined' || path === null || typeof path === 'undefined') {
    return defaultValue;
  }
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(Boolean);
  const result = pathArray.reduce((acc, key) => acc && acc[key], obj);
  return result === undefined ? defaultValue : result;
};

export default getDeep;
