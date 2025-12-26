const snakeCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // camelCase to snake_case (e.g., 'fooBar' -> 'foo_Bar')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2') // XMLHttpRequest -> XML_HttpRequest
    .replace(/[^a-zA-Z0-9_]/g, '_') // Replace non-alphanumeric with underscores
    .toLowerCase() // Convert to lowercase
    .replace(/_{2,}/g, '_') // Replace multiple underscores with a single underscore
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
};

module.exports = {
  snakeCase
};