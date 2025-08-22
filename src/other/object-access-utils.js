export const get = (obj, path, defaultValue = undefined) => {
  const keys = Array.isArray(path) ? path : path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

export const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

export const omit = (obj, keys) => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
