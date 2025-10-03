/**
 * Performs a deep merge of two objects.
 *
 * @param {object} target The target object to merge into.
 * @param {object} source The source object to merge from.
 * @returns {object} The merged object.
 */
export const deepMerge = (target, source) => {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

/**
 * Creates an object composed of the own enumerable string keyed properties of `object` that are not `keys`.
 *
 * @param {object} object The source object.
 * @param {Array<string>} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
export const omit = (object, keys) => {
  const newObject = { ...object };
  keys.forEach(key => delete newObject[key]);
  return newObject;
};

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {object} object The source object.
 * @param {Array<string>} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
export const pick = (object, keys) => {
  const newObject = {};
  keys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[key] = object[key];
    }
  });
  return newObject;
};
