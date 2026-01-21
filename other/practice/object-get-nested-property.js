const getNestedProperty = (obj, path) => {
  if (path === null || path === '') return undefined;
  const keys = Array.isArray(path) ? path : path.split('.');
  return keys.reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
};

export default getNestedProperty;
