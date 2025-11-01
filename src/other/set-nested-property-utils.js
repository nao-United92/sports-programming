/**
 * Sets the value at a nested path of an object. If a portion of the path
 * doesn't exist, it's created.
 *
 * @param {object} obj The object to modify.
 * @param {string|Array<string>} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the modified object.
 */
export const set = (obj, path, value) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    if (i === pathArray.length - 1) {
      // Last key in path, set the value
      current[key] = value;
    } else {
      // Intermediate key, ensure it's an object or array
      if (current[key] === undefined || current[key] === null) {
        // Determine if the next key is an array index
        const nextKey = pathArray[i + 1];
        current[key] = String(Number(nextKey)) === nextKey && Number(nextKey) >= 0 ? [] : {};
      }
      current = current[key];
    }
  }

  return obj;
};
