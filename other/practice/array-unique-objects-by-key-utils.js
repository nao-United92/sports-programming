const uniqueObjectsByKey = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' || key.length === 0) {
    throw new TypeError('Expected a non-empty string for the key argument.');
  }

  const seenKeys = new Set();
  const result = [];

  for (const item of arr) {
    if (typeof item === 'object' && item !== null) {
      // Check if the item has the key
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        const value = item[key];
        if (!seenKeys.has(value)) {
          seenKeys.add(value);
          result.push(item);
        }
      } else {
        // If the key is missing, add the object directly.
        // Each object missing the key is considered unique by default.
        result.push(item);
      }
    }
    // Non-object items are ignored as per previous design.
  }

  return result;
};

export default uniqueObjectsByKey;