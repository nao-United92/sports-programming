const get = (obj, path, defaultValue = undefined) => {
  if (obj == null) {
    return defaultValue;
  }

  const pathArray = Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.');

  const result = pathArray.reduce((prev, curr) => {
    return prev && prev[curr];
  }, obj);

  return result === undefined ? defaultValue : result;
};

module.exports = {
  get
};