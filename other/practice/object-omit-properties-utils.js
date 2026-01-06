const omit = (obj, propertiesToOmit) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return original for primitives, null, undefined
  }
  // Explicitly check for plain objects only
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return obj; // Return original for arrays, Dates, RegExps, etc.
  }
  if (!Array.isArray(propertiesToOmit)) {
    throw new Error('propertiesToOmit must be an array of strings.');
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!propertiesToOmit.includes(key)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

module.exports = omit;