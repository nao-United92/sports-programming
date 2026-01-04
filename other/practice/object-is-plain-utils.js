export const isPlainObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true; // Object.create(null)
  }

  // Check if the prototype is Object.prototype
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor === Object;
};
