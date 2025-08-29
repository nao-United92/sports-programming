/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for integer-indexed properties.
 *
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 */
export const set = (object, path, value) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.match(/([^[.\]])+/g); // This regex extracts parts like 'a', '0', 'b', 'c'

  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        // Check if the next key is an integer to decide between array or object
        current[key] = (Number.isInteger(Number(pathArray[i + 1]))) ? [] : {};
      }
      current = current[key];
    }
  }
  return object;
};
