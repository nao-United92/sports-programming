/**
 * Compares two objects and returns a new object representing the shallow differences.
 * The returned object contains properties from `obj2` that are either new or have different values
 * compared to `obj1`.
 *
 * @param {object} obj1 The first object to compare.
 * @param {object} obj2 The second object to compare against the first.
 * @returns {object} A new object containing the differences found in `obj2`.
 */
export const diff = (obj1, obj2) => {
  const result = {};

  if (obj1 === obj2) {
    return result;
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    // If either is not an object or is null, and they are not strictly equal,
    // then obj2 itself is the "difference" if it's a primitive or a different object type.
    // However, for a shallow diff, we only care about properties.
    // If obj1 is null/undefined and obj2 is an object, all of obj2's properties are new.
    // If obj1 is an object and obj2 is null/undefined, no properties from obj2 to compare.
    // For this shallow diff, we'll assume obj1 and obj2 are both objects or null/undefined.
    // If one is an object and the other is not, it's a fundamental difference,
    // but the request implies comparing properties *within* objects.
    // Let's refine: if obj1 is not an object, and obj2 is, then all of obj2's properties are new.
    // If obj2 is not an object, then there are no new properties from obj2.
    if (typeof obj2 === 'object' && obj2 !== null && (typeof obj1 !== 'object' || obj1 === null)) {
      return { ...obj2 }; // All properties in obj2 are new
    }
    return result;
  }

  // Check for properties in obj2
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (!Object.prototype.hasOwnProperty.call(obj1, key) || obj1[key] !== obj2[key]) {
        result[key] = obj2[key];
      }
    }
  }

  return result;
};
