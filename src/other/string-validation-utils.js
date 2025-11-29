// src/other/string-validation-utils.js

/**
 * Checks if a string is a valid UUID (Universally Unique Identifier).
 * Supports UUID versions 1, 3, 4, and 5.
 *
 * @param {string} uuid The string to validate.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
const isUUID = (uuid) => {
  if (typeof uuid !== 'string') {
    return false;
  }
  // Regex for UUID v1, v3, v4, v5
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

module.exports = {
  isUUID,
};