const camelCase = (str) => {
  if (str === null || str === undefined || str === '') {
    return '';
  }
  // Normalize separators to spaces
  let s = String(str)
    .replace(/[-_]+/g, ' ') // Convert snake_case and kebab-case to spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2'); // Insert space before uppercase letter in camelCase

  // Process space-separated words
  return s
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

module.exports = { camelCase };