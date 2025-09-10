/**
 * Checks if `value` is the language type of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

export { isObject };
