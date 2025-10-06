
/**
 * Creates an object composed of the deeply picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pickDeep = (object, paths) => {
  const result = {};
  if (object === null || object === undefined) {
    return result;
  }

  paths.forEach(path => {
    const keys = path.split('.');
    let current = object;
    let resultCurrent = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (current && Object.prototype.hasOwnProperty.call(current, key)) {
        if (i === keys.length - 1) {
          resultCurrent[key] = current[key];
        } else {
          resultCurrent[key] = resultCurrent[key] || {};
          current = current[key];
          resultCurrent = resultCurrent[key];
        }
      } else {
        break;
      }
    }
  });

  return result;
};
