/**
 * Replaces placeholders in a string with values from an object.
 * Placeholders are in the format `{{key}}`.
 *
 * @param {string} template The template string.
 * @param {object} values An object with keys corresponding to the placeholders.
 * @returns {string} The formatted string.
 */
export const template = (templateString, values) => {
  if (!templateString) {
    return '';
  }
  return templateString.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return values.hasOwnProperty(key) ? values[key] : match;
  });
};
