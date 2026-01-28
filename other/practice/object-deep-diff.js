const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);

/**
 * Deeply compares two objects and returns the difference.
 * @param {object} baseObject The object to compare against.
 * @param {object} comparedObject The object to compare.
 * @returns {object} An object containing the differences.
 */
function deepDiff(baseObject, comparedObject) {
  if (!isObject(baseObject) || !isObject(comparedObject)) {
    return {};
  }

  const diff = {};

  Object.keys(comparedObject).forEach(key => {
    const baseValue = baseObject[key];
    const comparedValue = comparedObject[key];

    if (baseObject.hasOwnProperty(key)) {
      if (isObject(baseValue) && isObject(comparedValue)) {
        const nestedDiff = deepDiff(baseValue, comparedValue);
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else if (Array.isArray(baseValue) && Array.isArray(comparedValue)) {
        if (JSON.stringify(baseValue) !== JSON.stringify(comparedValue)) {
          diff[key] = comparedValue;
        }
      } else if (baseValue !== comparedValue) {
        diff[key] = comparedValue;
      }
    } else {
      diff[key] = comparedValue;
    }
  });

  Object.keys(baseObject).forEach(key => {
    if (!comparedObject.hasOwnProperty(key)) {
      diff[key] = undefined; // Indicate deletion
    }
  });


  return diff;
}

module.exports = { deepDiff };
