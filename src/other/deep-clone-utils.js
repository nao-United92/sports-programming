/**
 * Creates a deep clone of a value. It handles primitives, objects, arrays,
 * Dates, RegExps, and circular references.
 *
 * @param {*} source The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export const deepClone = (source) => {
  // Use a Map to handle circular references and performance
  const cloneMap = new WeakMap();

  function clone(value) {
    // Return primitives and functions as is
    if (value === null || typeof value !== 'object') {
      return value;
    }

    // Handle Date
    if (value instanceof Date) {
      return new Date(value.getTime());
    }

    // Handle RegExp
    if (value instanceof RegExp) {
      return new RegExp(value.source, value.flags);
    }

    // If the object is already cloned, return the cached clone
    if (cloneMap.has(value)) {
      return cloneMap.get(value);
    }

    // Handle Array
    if (Array.isArray(value)) {
      const newArray = [];
      cloneMap.set(value, newArray);
      for (let i = 0; i < value.length; i++) {
        newArray[i] = clone(value[i]);
      }
      return newArray;
    }

    // Handle Object
    const newObj = Object.create(Object.getPrototypeOf(value));
    cloneMap.set(value, newObj);
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        newObj[key] = clone(value[key]);
      }
    }

    return newObj;
  }

  return clone(source);
};
