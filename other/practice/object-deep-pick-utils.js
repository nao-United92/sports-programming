/**
 * Deeply picks properties from an object based on provided paths.
 * 
 * @param {Object} obj The source object
 * @param {string[]} paths Array of string paths (e.g., 'a.b')
 * @returns {Object} A new object with the picked properties
 */
function deepPick(obj, paths) {
  const result = {};

  paths.forEach(path => {
    const keys = path.split('.');
    let currentSrc = obj;
    let currentDest = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (currentSrc === null || currentSrc === undefined || !Object.prototype.hasOwnProperty.call(currentSrc, key)) {
        break;
      }

      if (i === keys.length - 1) {
        currentDest[key] = currentSrc[key];
      } else {
        if (!currentDest[key]) {
          currentDest[key] = {};
        }
        currentDest = currentDest[key];
        currentSrc = currentSrc[key];
      }
    }
  });

  return result;
}

module.exports = { deepPick };
