const stringToPath = (path) => {
  if (typeof path !== 'string') return path;
  const result = [];
  path.replace(/[^.[\].]+|\[(?:.|
)]|\[(.*?)]/g, (match, key) => {
    result.push(key || match.replace(/\\(.)/g, '$1'));
  });
  return result;
};

export const get = (obj, path, defaultValue) => {
  const keys = Array.isArray(path) ? path : stringToPath(path);
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

export const has = (obj, path) => {
  const keys = Array.isArray(path) ? path : stringToPath(path);
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (current == null || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }
  // Check if the final key exists, even if its value is undefined
  const lastKey = keys[keys.length - 1];
  return keys.length > 0 ? Object.prototype.hasOwnProperty.call(current, lastKey) : true;
};