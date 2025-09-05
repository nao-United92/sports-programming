/**
 * Checks if a given item is a plain object.
 * @param {*} item The item to check.
 * @returns {boolean} True if the item is a plain object, false otherwise.
 */
const isPlainObject = (item) => {
  return item && typeof item === 'object' && item.constructor === Object;
};

/**
 * Deeply merges multiple objects into a new object without mutating the original objects.
 * Properties from later objects in the array will overwrite properties from earlier objects.
 * Arrays are concatenated.
 *
 * @param {Array<Object>} objects The array of objects to merge.
 * @returns {Object} A new object containing the deeply merged properties.
 */
export function deepMergeAll(objects) {
  const result = {};

  objects.forEach(obj => {
    if (!isPlainObject(obj)) {
      return; // Skip non-plain objects or null/undefined
    }

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const objValue = obj[key];
        const resultValue = result[key];

        if (isPlainObject(objValue) && isPlainObject(resultValue)) {
          result[key] = deepMergeAll([resultValue, objValue]);
        } else if (Array.isArray(objValue) && Array.isArray(resultValue)) {
          result[key] = [...resultValue, ...objValue];
        } else if (isPlainObject(objValue) && !isPlainObject(resultValue) && resultValue !== undefined) {
          // If resultValue is not a plain object but objValue is, and resultValue exists, overwrite it.
          // This handles cases where a primitive is replaced by an object.
          result[key] = deepMergeAll([{}, objValue]);
        } else {
          result[key] = objValue;
        }
      }
    }
  });

  return result;
}
