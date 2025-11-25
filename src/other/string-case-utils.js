const toCamelCase = (str) => {
  if (!str) return '';
  return str.replace(/([-_.\s])+(.)?/g, (_match, _separator, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
};

const toPascalCase = (str) => {
    if (!str) return '';
    const camelCase = toCamelCase(str);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const toSnakeCase = (str) => {
  if (!str) return '';
  return toPascalCase(str)
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
};

const toKebabCase = (str) => {
  if (!str) return '';
  return toPascalCase(str)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

module.exports = {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
};
