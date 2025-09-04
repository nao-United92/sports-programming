/**
 * Checks if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * isPlainObject({});
 * // => true
 *
 * isPlainObject(new Object());
 * // => true
 *
 * isPlainObject(Object.create(null));
 * // => true
 *
 * isPlainObject([]);
 * // => false
 *
 * isPlainObject(null);
 * // => false
 *
 * isPlainObject(function() {});
 * // => false
 */
function isPlainObject(value) {
  if (value === null || typeof value !== 'object' || value.nodeType) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

export default isPlainObject;
