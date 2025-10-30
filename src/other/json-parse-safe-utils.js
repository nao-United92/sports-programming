/**
 * Safely parses a JSON string. If parsing fails, it returns a default value or `undefined`.
 *
 * @param {string} jsonString The JSON string to parse.
 * @param {any} [defaultValue=undefined] The value to return if parsing fails.
 * @returns {any} The parsed object, or `defaultValue` if parsing fails.
 */
function parseSafe(jsonString, defaultValue = undefined) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    console.error("Failed to parse JSON string:", error);
    return defaultValue;
  }
}

module.exports = { parseSafe };
