import { isPlainObject } from './object-is-plain-object-utils';

/**
 * Recursively merges own enumerable properties of source objects into the destination object,
 * using a customizer function to resolve conflicts.
 *
 * @param {Object} target The object to modify.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 *                              Invoked with (objValue, srcValue, key, object, source).
 * @returns {Object} The modified target object.
 */
const mergeWith = (target, source, customizer) => {
  // Ensure target is an object to prevent unexpected behavior
  if (typeof target !== 'object' || target === null) {
    target = {};
  }
  // Ensure source is an object or array to merge from
  if (typeof source !== 'object' || source === null) {
    return target;
  }

  Object.keys(source).forEach(key => {
    const objValue = target[key];
    const srcValue = source[key];
    let value;

    if (customizer) {
      value = customizer(objValue, srcValue, key, target, source);
    }

    if (value !== undefined) { // If customizer returned a value, use it
      target[key] = value;
    } else if (isPlainObject(objValue) && isPlainObject(srcValue)) {
      target[key] = mergeWith(objValue, srcValue, customizer);
    } else if (Array.isArray(objValue) && Array.isArray(srcValue)) {
      // Default array merge behavior: concatenate
      target[key] = objValue.concat(srcValue);
    } else {
      target[key] = srcValue;
    }
  });

  return target;
};

export default mergeWith;