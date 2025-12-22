export const snakeCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[\s-]+/g, '_')
    .toLowerCase()
    .replace(/^_/, '');
};