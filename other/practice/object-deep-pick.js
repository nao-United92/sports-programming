/**
 * Picks properties from an object using a nested path.
 * 
 * @param {Object} obj 
 * @param {string[]} paths Array of paths (e.g., ['a.b.c', 'd'])
 * @returns {Object}
 */
const deepPick = (obj, paths) => {
  const result = {};
  paths.forEach((path) => {
    const keys = path.split('.');
    let currentSrc = obj;
    let currentDest = result;
    
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (currentSrc && Object.prototype.hasOwnProperty.call(currentSrc, key)) {
        if (i === keys.length - 1) {
          currentDest[key] = currentSrc[key];
        } else {
          currentDest[key] = currentDest[key] || {};
          currentDest = currentDest[key];
          currentSrc = currentSrc[key];
        }
      } else {
        break;
      }
    }
  });
  return result;
};

module.exports = deepPick;
