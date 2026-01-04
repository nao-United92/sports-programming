export const pickFromArray = (arrayOfObjects, keysToPick) => {
  if (!Array.isArray(arrayOfObjects)) {
    throw new TypeError('Expected an array of objects');
  }
  if (!Array.isArray(keysToPick) && typeof keysToPick !== 'string') {
    throw new TypeError('Expected keysToPick to be an array of strings or a single string');
  }

  const keys = Array.isArray(keysToPick) ? keysToPick : [keysToPick];

  return arrayOfObjects.map(obj => {
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Return non-objects as is or handle as error depending on desired behavior
    }
    const newObj = {};
    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  });
};
