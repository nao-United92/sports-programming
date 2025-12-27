const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

  if (!pathArray || pathArray.length === 0) {
    return defaultValue;
  }

  const result = pathArray.reduce((prevObj, key) => {
    if (prevObj && typeof prevObj === 'object' && key in prevObj) {
      return prevObj[key];
    }
    return undefined;
  }, obj);

  return result === undefined ? defaultValue : result;
};

module.exports = { get };
