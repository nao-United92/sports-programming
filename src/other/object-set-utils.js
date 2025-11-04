/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for integer-keyed paths.
 *
 * @param {object} object The object to modify.
 * @param {string|Array<string>} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns `object`.
 */
export const set = (object, path, value) => {
  if (object == null) {
    return object;
  }

  const pathArray = Array.isArray(path) ? path : path.replace(/\\[(\\d+)\\]/g, '.$1').split('.').filter(Boolean);
  let current = object;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (current[key] === null || current[key] === undefined) {
        // Determine if the next key is an array index
        const nextKey = pathArray[i + 1];
        current[key] = String(Number(nextKey)) === nextKey && Number.isInteger(Number(nextKey)) ? [] : {};
      }
      current = current[key];
    }
  }
  return object;
};