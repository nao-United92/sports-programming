const isEmptyObject = (obj) => {
  // Check for null or undefined
  if (obj === null || obj === undefined) {
    return true;
  }

  // Check for non-object types
  if (typeof obj !== 'object') {
    return false;
  }

  // Handle arrays explicitly
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  // Handle other built-in objects that might have no enumerable keys but are not "empty"
  // e.g., new Date(), /regex/
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false; // Not a plain object, so consider it not empty
  }

  // Now, we are sure it's a plain object (or Object.create(null) which is handled below)
  // Check if it has no enumerable own properties
  // Also covers Object.create(null) if it has no properties
  return Object.keys(obj).length === 0;
};

module.exports = isEmptyObject;
