/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }

  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
}

module.exports = { isPlainObject };