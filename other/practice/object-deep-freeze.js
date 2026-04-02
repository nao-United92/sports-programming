/**
 * Recursively freezes an object and all its nested properties.
 * 
 * @param {object} obj - The object to deep freeze.
 * @returns {object} The frozen object.
 */
function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
    return obj;
  }

  // Get all property names
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];
    if (value !== null && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

module.exports = deepFreeze;
