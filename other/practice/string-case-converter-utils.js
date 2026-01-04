const toCamelCase = (str) => {
  return str.replace(/([-_][a-z])/g, (g) => g[1].toUpperCase());
};

const toSnakeCase = (str) => {
  return str
    .replace(/([A-Z])/g, (g) => `_${g.toLowerCase()}`)
    .replace(/[- ]/g, '_')
    .replace(/_+/g, '_') // Consecutive underscores to a single underscore
    .toLowerCase();
};

const toKebabCase = (str) => {
  return str
    .replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`)
    .replace(/[_ ]/g, '-')
    .replace(/-+/g, '-') // Consecutive hyphens to a single hyphen
    .toLowerCase();
};

module.exports = { toCamelCase, toSnakeCase, toKebabCase };
