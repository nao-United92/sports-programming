/**
 * Converts a string to camel case.
 * 
 * @param {string} str - The string to convert
 * @returns {string} - The camel-cased string
 */
function toCamelCaseModern(str) {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toLowerCase());
}

module.exports = toCamelCaseModern;
