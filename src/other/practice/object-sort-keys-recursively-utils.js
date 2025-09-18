const isObject = (obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj);

const sortKeysRecursively = (obj) => {
  if (!isObject(obj)) {
    return obj;
  }

  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};

  for (const key of sortedKeys) {
    sortedObj[key] = sortKeysRecursively(obj[key]);
  }

  return sortedObj;
};

module.exports = { sortKeysRecursively };