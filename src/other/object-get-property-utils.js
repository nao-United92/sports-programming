export function getProperty(obj, path, defaultValue = undefined) {
  if (!obj || typeof obj !== 'object') {
    return defaultValue;
  }

  // path が無効な型の場合、defaultValue を返す
  if (typeof path !== 'string' && !Array.isArray(path)) {
    return defaultValue;
  }

  const pathParts = Array.isArray(path) ? path : path.split('.');

  // pathParts が空の場合、obj そのものを返す
  if (pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === '')) {
    return obj;
  }

  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !current.hasOwnProperty(part)) {
      return defaultValue;
    }
    current = current[part];
  }

  return current;
}