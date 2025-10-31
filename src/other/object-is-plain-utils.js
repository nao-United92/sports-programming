const isPlainObject = (value) => {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  // Objects with no prototype (e.g., Object.create(null)) are plain.
  if (proto === null) {
    return true;
  }
  // Check if the prototype has a constructor.
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  // Check if the constructor is the Object function.
  return typeof Ctor === 'function' && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
};

module.exports = { isPlainObject };
