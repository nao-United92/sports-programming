const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // A simple deep clone using JSON.
  // Note: This does not handle functions, undefined, Symbols, or circular references.
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    // Fallback for cases where stringify fails (e.g., circular references)
    // A more robust implementation would handle this, but for now, we return a shallow copy.
    return { ...obj };
  }
};

module.exports = { deepClone };