/**
 * This method is like zip except that it accepts an array of grouped elements 
 * and creates an array regrouping the elements to their pre-zip configuration.
 *
 * @param {Array} array - The array of grouped elements to process.
 * @returns {Array} The new array of regrouped elements.
 */
export const unzip = (array) => {
  if (!(array && array.length)) {
    return [];
  }
  const maxLength = Math.max(...array.map(group => group.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return array.map(group => group[i]);
  });
};
