const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\w+)\]/g, '.$1').split('.');
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

export default get;
