/**
 * Converts a number from one base to another.
 * 
 * @param {string|number} value 
 * @param {number} fromBase 
 * @param {number} toBase 
 * @returns {string}
 */
const convertBase = (value, fromBase, toBase) => {
  return parseInt(String(value), fromBase).toString(toBase);
};

module.exports = convertBase;
