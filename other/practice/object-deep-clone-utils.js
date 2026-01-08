const deepCloneObject = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepCloneObject(item));
  }

  // Handle Object
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepCloneObject(obj[key]);
    }
  }

  return clonedObj;
};

export default deepCloneObject;