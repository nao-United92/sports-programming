const toCamelCase = (str) => {
  if (!str) return '';
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/[-_]$/, '');
};

module.exports = toCamelCase;