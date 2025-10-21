const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(i => i.length);

  const result = pathArray.reduce((acc, key) => {
    return (acc && acc[key] !== 'undefined') ? acc[key] : undefined;
  }, obj);

  return result === undefined ? defaultValue : result;
};

module.exports = { get };