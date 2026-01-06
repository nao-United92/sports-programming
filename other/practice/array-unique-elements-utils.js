const uniqueElements = (arr, key = undefined) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  if (key === undefined) {
    // For primitive values or full object comparison
    return [...new Set(arr)];
  } else {
    // For objects, unique by a specified key
    const seen = new Set();
    return arr.filter(item => {
      let identifier = item[key];
      // If the identifier itself is an object, stringify it for comparison for uniqueness
      // Note: This won't work for functions, undefined, or circular structures.
      if (typeof identifier === 'object' && identifier !== null) {
        try {
          identifier = JSON.stringify(identifier);
        } catch (e) {
          // If JSON.stringify fails (e.g., circular structure), fall back to reference or throw
          // For now, let's treat as unique if stringify fails
          // A more robust solution might use a custom hash function or WeakMap
          console.warn('Could not stringify object for uniqueness comparison, treating as unique:', item);
          identifier = item[key]; // Keep original reference, will be treated as unique by Set
        }
      }
      if (!seen.has(identifier)) {
        seen.add(identifier);
        return true;
      }
      return false;
    });
  }
};

module.exports = uniqueElements;
