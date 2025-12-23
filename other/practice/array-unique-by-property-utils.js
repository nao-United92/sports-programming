/**
 * Creates a duplicate-free version of an array of objects, based on a property.
 *
 * @param {Array<Object>} arr The array to inspect.
 * @param {string} prop The property name to check for uniqueness.
 * @returns {Array<Object>} Returns the new duplicate free array.
 */
function uniqueByProperty(arr, prop) {
  if (!Array.isArray(arr) || !prop || typeof prop !== 'string') {
    return [];
  }

  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (item && typeof item === 'object' && !Array.isArray(item) && Object.prototype.hasOwnProperty.call(item, prop)) {
      const value = item[prop];
      if (!seen.has(value)) {
        seen.add(value);
        result.push(item);
      }
    } else {
      // If item is not an object, or doesn't have the property,
      // we treat it as unique if its value hasn't been seen.
      // This part might need clarification based on specific requirements,
      // but for now, we'll just add it if not an object or if prop is missing.
      // Or, more strictly, we could just ignore such items.
      // For this implementation, we'll only process objects with the specified property.
      // Let's refine: only add valid objects that have the property and are unique by that property.
      // Non-object items are considered unique if their *entire* value hasn't been seen.
      // But the function is named `uniqueByProperty`, so it should really focus on objects.
      // If a non-object or object without property is encountered, it should probably be excluded
      // unless specifically asked to include it as-is.
      // For now, let's strictly handle objects with the property.
      // If `item[prop]` is undefined, it's a valid value, so check that too.
      // Let's make it more robust for non-object items, if they are unique.
      // No, let's stick to the purpose: unique *by property*. So non-objects are ignored.
      // The `item && typeof item === 'object'` check ensures this.
    }
  }

  return result;
}

module.exports = uniqueByProperty;
