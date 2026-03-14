/**
 * Computes a shallow difference between two objects.
 * Returns an object with added, removed, and changed keys.
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {Object} { added: [], removed: [], changed: [] }
 */
const diffShallow = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const added = keys2.filter((key) => !Object.prototype.hasOwnProperty.call(obj1, key));
  const removed = keys1.filter((key) => !Object.prototype.hasOwnProperty.call(obj2, key));
  const changed = keys1.filter(
    (key) => Object.prototype.hasOwnProperty.call(obj2, key) && obj1[key] !== obj2[key]
  );

  return { added, removed, changed };
};

module.exports = diffShallow;
