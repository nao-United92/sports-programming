
/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {object} Returns the new object.
 */
export const zipObject = (props = [], values = []) => {
  return props.reduce((obj, prop, index) => {
    obj[prop] = values[index];
    return obj;
  }, {});
};
