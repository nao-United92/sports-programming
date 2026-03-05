/**
 * This method is like zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
 * @param {Array} array - The array of grouped elements to process.
 * @returns {Array} - The new array of regrouped elements.
 */
function unzip(array) {
  if (!Array.isArray(array) || array.length === 0) return [];
  const maxLength = Math.max(...array.map((group) => (group ? group.length : 0)));
  return Array.from({ length: maxLength }, (_, i) =>
    array.map((group) => (group ? group[i] : undefined))
  );
}

module.exports = unzip;
