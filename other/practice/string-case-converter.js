

const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return str.replace(/([-_\s]+(.)?)/g, (match, sep, c) => c ? c.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
};

const toPascalCase = (str) => {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
};

const toKebabCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return toSnakeCase(str).replace(/_/g, '-');
};

module.exports = {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
};
