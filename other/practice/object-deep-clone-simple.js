
const objectDeepCloneSimple = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => objectDeepCloneSimple(item));
  }
  
  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = objectDeepCloneSimple(obj[key]);
    }
  }
  return cloned;
};

module.exports = objectDeepCloneSimple;
