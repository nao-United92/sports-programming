/**
 * Checks if a string contains only numeric characters.
 * Allows for an optional leading sign (+/-) and a single decimal point.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is numeric, false otherwise.
 */
const stringIsNumeric = (str) => {
  // Use a regular expression to match numbers.
  // ^: start of the string
  // [+-]?: optional leading plus or minus sign
  // \d+: one or more digits
  // (\.\d+)?: optional decimal point followed by one or more digits
  // $: end of the string
  return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(str);
};

export default stringIsNumeric;
