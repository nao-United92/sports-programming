/**
 * Formats a string by replacing placeholders with corresponding values from a data object.
 * Placeholders are in the format `{key}`.
 * If a key is not found in the data object, its placeholder will be replaced with an empty string.
 *
 * @param {string} template The template string with placeholders.
 * @param {object} data The object containing values for the placeholders.
 * @returns {string} The formatted string.
 */
export const formatString = (template, data) => {
  if (typeof template !== 'string') {
    return '';
  }
  if (typeof data !== 'object' || data === null) {
    return template; // If data is not an object, no replacements can be made
  }

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return Object.prototype.hasOwnProperty.call(data, key) ? String(data[key]) : '';
  });
};
