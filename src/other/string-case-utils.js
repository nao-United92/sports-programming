export const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
};

export const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
