const pick = (obj, keysToPick) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {}; // Return empty object if input is not a plain object
  }
  if (!Array.isArray(keysToPick)) {
    throw new TypeError('Expected an array for the keysToPick argument.');
  }

  const newObj = {};
  keysToPick.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export default pick;