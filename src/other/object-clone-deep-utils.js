/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export const cloneDeep = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Handle Array
  if (Array.isArray(value)) {
    return value.map(item => cloneDeep(item));
  }

  // Handle Object
  const clonedObj = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObj[key] = cloneDeep(value[key]);
    }
  }
  return clonedObj;
};