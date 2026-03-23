// Converts a string to kebab-case
export const toKebabCase = (string) => {
  if (typeof string !== 'string') return '';
  const match = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!match) return '';
  return match
    .map(x => x.toLowerCase())
    .join('-');
};
