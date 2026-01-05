const arrayIntersectionMultipleBy = (iteratee, ...arrays) => {
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected the first argument to be an iteratee function.');
  }
  if (arrays.length === 0) {
    return [];
  }
  if (!arrays.every(Array.isArray)) {
    throw new TypeError('Expected all subsequent arguments to be arrays.');
  }

  // If only one array is provided, return its unique elements based on iteratee
  if (arrays.length === 1) {
    const seen = new Set();
    const result = [];
    for (const item of arrays[0]) {
      const key = iteratee(item);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
    return result;
  }

  // Convert the first array's elements (or their iteratee values) to a Set for efficient lookup
  const firstArray = arrays[0];
  let commonElements = firstArray.map(item => ({ original: item, key: iteratee(item) }));

  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];
    const currentKeys = new Set(currentArray.map(iteratee));

    commonElements = commonElements.filter(obj => currentKeys.has(obj.key));

    // Optimization: if at any point commonElements becomes empty, no intersection exists
    if (commonElements.length === 0) {
      return [];
    }
  }

  // Extract original items, keeping only unique ones based on their keys
  const finalResultKeys = new Set();
  const finalResult = [];
  for (const obj of commonElements) {
    if (!finalResultKeys.has(obj.key)) {
      finalResultKeys.add(obj.key);
      finalResult.push(obj.original);
    }
  }

  return finalResult;
};

module.exports = arrayIntersectionMultipleBy;
