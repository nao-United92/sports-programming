const get = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj !== "object") {
    return defaultValue;
  }

  const keys = Array.isArray(path) ? path : path.split(".");

  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (current === null || typeof current !== "object" || !current.hasOwnProperty(key)) {
      return defaultValue;
    }
    current = current[key];
  }
  return current;
};

module.exports = { get };
