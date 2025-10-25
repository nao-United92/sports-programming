
/**
 * Creates a deep clone of a value.
 * Note: This is a simple implementation and does not handle functions, Maps, Sets, etc.
 * It is intended for JSON-serializable objects.
 *
 * @param {*} value The value to clone.
 * @returns {*} The deep cloned value.
 */
const cloneDeep = (value) => {
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
  const clonedObject = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObject[key] = cloneDeep(value[key]);
    }
  }
  return clonedObject;
};

module.exports = { cloneDeep };
