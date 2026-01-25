const snakeCase = (str) => {
  return str
    .replace(/([A-Z])/g, '_$1') // CamelCase to snake_Case
    .replace(/[\s-]+/g, '_')   // Spaces and hyphens to underscores
    .toLowerCase()
    .replace(/^_/, '')         // Remove leading underscore
    .replace(/_$/, '');        // Remove trailing underscore
};

module.exports = { snakeCase };
