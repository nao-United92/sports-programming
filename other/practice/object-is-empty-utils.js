export const isEmptyObject = (obj) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return false; // Not an object, or is an array (which has length property)
  }
  return Object.keys(obj).length === 0;
};