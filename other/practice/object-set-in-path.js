/**
 * Sets a deeply nested property on an object using a path array, returning a new object.
 * This function is immutable: it does not modify the original object.
 *
 * @param {Object} obj The object to modify.
 * @param {Array<string|number>} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} A new object with the updated property.
 */
const setInPath = (obj, path, value) => {
  if (!Array.isArray(path) || path.length === 0) {
    return { ...obj,
      ...value
    }; // If path is empty, merge value directly into a new object
  }

  const newObj = Array.isArray(obj) ? [...obj] : { ...obj
  }; // Create a shallow copy to maintain immutability

  let current = newObj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];

    if (i === path.length - 1) {
      // Last part of the path, set the value
      current[key] = value;
    } else {
      // Intermediate path part
      if (typeof current[key] !== 'object' || current[key] === null || !Object.prototype.hasOwnProperty.call(current, key)) {
        // Create a new object for the next level if it doesn't exist or is not an object
        current[key] = {};
      } else {
        // If it exists and is an object, clone it to maintain immutability
        current[key] = Array.isArray(current[key]) ? [...current[key]] : { ...current[key]
        };
      }
      current = current[key];
    }
  }
  return newObj;
};

export default setInPath;