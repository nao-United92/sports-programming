const isObject = (obj) => obj === Object(obj);

export const set = (obj, path, value) => {
  if (!isObject(obj)) {
    return obj;
  }

  // Regex to split path into segments, handling array indices.
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\]/g, '.').replace(/^\.|\.$/, '').split('.');

  pathArray.reduce((acc, key, i) => {
    const isLast = i === pathArray.length - 1;
    if (isLast) {
      acc[key] = value;
      return acc[key];
    }

    if (!isObject(acc[key])) {
      // Look ahead to the next key to determine if we should create an array or object.
      const nextKey = pathArray[i + 1];
      const useArray = /^\d+$/.test(nextKey);
      acc[key] = useArray ? [] : {};
    }

    return acc[key];
  }, obj);

  return obj;
};