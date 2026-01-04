export const getByPath = (obj, path) => {
  if (typeof obj !== 'object' || obj === null) {
    return undefined;
  }
  if (typeof path !== 'string' || path.trim() === '') {
    throw new TypeError('Expected path to be a non-empty string');
  }

  const pathParts = path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (typeof current !== 'object' || current === null || !Object.prototype.hasOwnProperty.call(current, part)) {
      return undefined;
    }
    current = current[part];
  }
  return current;
};