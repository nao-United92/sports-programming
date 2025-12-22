export const isPlainObject = (value) => {
  if (value === null || typeof value !== 'object' || value.nodeType || (value.constructor && !Object.prototype.hasOwnProperty.call(value.constructor.prototype, 'isPrototypeOf'))) {
    return false;
  }
  return true;
};