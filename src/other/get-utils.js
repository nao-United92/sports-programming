export const get = (obj, path, defaultValue = undefined) => {
  if (path === '' || path === null || path === undefined) {
    return defaultValue;
  }

  const pathParts = Array.isArray(path) ? path : path.replace(/\\[(\\d+)\\]/g, '.$1').split('.').filter(Boolean);

  let current = obj;
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[part];
  }
  return current === undefined ? defaultValue : current;
};