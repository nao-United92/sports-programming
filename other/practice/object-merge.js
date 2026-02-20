/**
 * Merges two objects. Properties from the second object overwrite those of the first.
 *
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} The merged object.
 */
export const merge = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
