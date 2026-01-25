const kebabCase = (str) => {
  return str
    .trim()
    .replace(/([A-Z])/g, '-$1') // CamelCase to kebab-Case
    .replace(/[\s_]+/g, '-')   // Spaces and underscores to hyphens
    .toLowerCase()
    .replace(/^-/, '')         // Remove leading hyphen
    .replace(/-$|^$/g, '');     // Remove trailing hyphen or empty string
};

module.exports = { kebabCase };
