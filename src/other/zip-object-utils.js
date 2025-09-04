/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @param {Array} [keys=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 */
function zipObject(keys = [], values = []) {
  if (keys == null || values == null) {
    return {};
  }
  const result = {};
  const length = Math.min(keys.length, values.length);

  for (let i = 0; i < length; i++) {
    if (keys[i] != null) {
        result[keys[i]] = values[i];
    }
  }
  return result;
}

export default zipObject;
