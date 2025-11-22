export const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  // Remove all non-alphanumeric characters and convert to camelCase
  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^./, (match) => match.toLowerCase());
};

export const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const toPascalCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  // Remove all non-alphanumeric characters and convert to PascalCase
  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^./, (match) => match.toUpperCase());
};
