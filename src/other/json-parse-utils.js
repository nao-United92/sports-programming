/**
 * Safely parses a JSON string without throwing an error.
 * @param {string} jsonString The JSON string to parse.
 * @param {*} [defaultValue=null] The value to return if parsing fails.
 * @returns {*} The parsed object, or the default value if parsing fails.
 */
function safeJsonParse(jsonString, defaultValue = null) {
  if (typeof jsonString !== 'string') {
    return defaultValue;
  }
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return defaultValue;
  }
}

module.exports = {
  safeJsonParse,
};
