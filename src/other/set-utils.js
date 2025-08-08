export const set = (obj, path, value) => {
  if (Object(obj) !== obj) return obj; // Only work with objects
  if (typeof path === 'string') {
    path = path.split(/[.\[\]]/).filter(p => p !== '');
  }
  if (!Array.isArray(path) || path.length === 0) return obj;

  let current = obj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (i === path.length - 1) {
      current[key] = value;
    } else {
      if (Object(current[key]) !== current[key]) {
        current[key] = /^\d+$/.test(path[i + 1]) ? [] : {}; // Create array or object
      }
      current = current[key];
    }
  }
  return obj;
};
