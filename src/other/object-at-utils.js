const get = (object, path) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\\[(\\d+)\\]/g, '.$1').split('.').filter(Boolean);
  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[pathArray[i]];
  }
  return current;
};

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @param {object} object The object to iterate over.
 * @param {string[]} paths The paths of the property to pick.
 * @returns {Array} Returns the new array of values.
 */
export const at = (object, paths) => {
  if (!object || !paths) {
    return [];
  }
  return paths.map(path => get(object, path));
};