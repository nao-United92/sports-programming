const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const arrayDeepMerge = (target, source, idKey = 'id') => {
  if (!Array.isArray(target) || !Array.isArray(source)) {
    throw new TypeError('Both arguments must be arrays.');
  }

  const merged = [...target];

  source.forEach(sourceItem => {
    // Find if an item with the same ID exists in the target array
    const targetItemIndex = merged.findIndex(
      mergedItem => isObject(mergedItem) && isObject(sourceItem) && mergedItem[idKey] === sourceItem[idKey]
    );

    if (targetItemIndex !== -1) {
      // If item with same ID exists, deep merge the objects
      const targetItem = merged[targetItemIndex];
      merged[targetItemIndex] = deepMerge(targetItem, sourceItem);
    } else {
      // Otherwise, add new item
      merged.push(sourceItem);
    }
  });

  return merged;
};

// A generic deep merge function, reused here.
// This handles nested objects and arrays within objects.
const deepMerge = (target, source) => {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        // Concatenate arrays by default
        output[key] = [...target[key], ...source[key]];
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export default arrayDeepMerge;