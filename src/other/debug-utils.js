/**
 * "Taps" into a value in a method chain to log it to the console and then returns the value.
 * @param {*} value The value to log.
 * @param {string} [tag=''] An optional tag to prepend to the log output.
 * @returns {*} The original value.
 */
const tap = (value, tag = '') => {
  console.log(tag ? `${tag}:` : '', value);
  return value;
};

module.exports = { tap };
