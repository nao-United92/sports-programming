
/**
 * Checks if `value` is a plain object, that is, an object created by the `Object` constructor
 * or one with a `[[Prototype]]` of `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
export const isPlainObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true; // Object.create(null)
  }

  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor.prototype === proto;
};
