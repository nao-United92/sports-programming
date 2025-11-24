const toCamelCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([_.\- ]+)([a-zA-Z0-9])/g, (m, p1, p2) => p2.toUpperCase())
    .replace(/^[A-Z]/, (m) => m.toLowerCase());
};

const toSnakeCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str)
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
};

module.exports = { toCamelCase, toSnakeCase };