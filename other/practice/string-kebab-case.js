const kebabCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .toLowerCase() // Convert to lowercase
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

module.exports = { kebabCase };
