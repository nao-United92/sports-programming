
/**
 * The opposite of `pickDeep`; this method creates an object composed of the own
 * and inherited enumerable property paths of `object` that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omitDeep = (object, paths) => {
  const result = JSON.parse(JSON.stringify(object)); // Simple deep clone
  if (object === null || object === undefined) {
    return {};
  }

  paths.forEach(path => {
    const keys = path.split('.');
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (i === keys.length - 1) {
        delete current[key];
      } else {
        current = current[key];
        if (current === undefined) {
          break;
        }
      }
    }
  });

  return result;
};
