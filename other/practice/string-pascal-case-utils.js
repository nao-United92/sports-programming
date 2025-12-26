const pascalCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space separated (e.g., 'fooBar' -> 'foo Bar')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // XMLHttpRequest -> XML Http Request
    .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric with spaces
    .toLowerCase() // Convert to lowercase
    .split(' ') // Split by spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(''); // Join words without spaces
};

module.exports = {
  pascalCase
};