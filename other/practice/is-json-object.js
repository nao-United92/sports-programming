/**
 * Checks if a value is a plain JavaScript object that can be safely JSON.stringified.
 * This effectively checks if it's a "JSON object" in terms of structure,
 * rather than checking if a string *is* valid JSON.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain JSON-compatible object, else `false`.
 */
const isJsonObject = (value) => {
  // A JSON object must be an object, but not null, arrays, functions, dates, regexps, etc.
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  // Check that the object was created by the Object constructor, or is a plain literal object.
  // This helps exclude instances of custom classes.
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

export default isJsonObject;