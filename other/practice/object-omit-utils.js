const omit = (obj, keysToOmit) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }
  if (!Array.isArray(keysToOmit)) {
    throw new TypeError('Expected an array for the keysToOmit argument.');
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!keysToOmit.includes(key)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

export default omit;