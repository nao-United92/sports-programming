/**
 * Converts any string to camelCase, handling various separators and case formats.
 * 
 * @param {string} str 
 * @returns {string}
 */
const toCamelCaseAdvanced = (str) => {
  if (!str) return '';
  
  // Handle XMLHttpRequest -> xmlHttpRequest
  // First, insert space before uppercase letters that follow lowercase or numbers
  // Then, insert space before the last uppercase letter in a sequence (e.g., XMLHttp -> XML Http)
  const result = str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .toLowerCase()
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');
    
  return result;
};

module.exports = toCamelCaseAdvanced;
