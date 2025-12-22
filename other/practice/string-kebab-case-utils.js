export const kebabCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
