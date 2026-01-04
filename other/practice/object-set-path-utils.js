export const setByPath = (obj, path, value) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected obj to be a non-null object');
  }
  if (typeof path !== 'string' || path.trim() === '') {
    throw new TypeError('Expected path to be a non-empty string');
  }

  const pathParts = path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];

    if (i === pathParts.length - 1) {
      // Last part of the path, set the value
      current[part] = value;
    } else {
      // Intermediate path part
      if (typeof current[part] !== 'object' || current[part] === null) {
        // Determine if the next part looks like an array index
        const nextPartIsArrayIndex = /^\d+$/.test(pathParts[i + 1]);
        current[part] = nextPartIsArrayIndex ? [] : {};
      }
      current = current[part];
    }
  }
  return obj;
};
