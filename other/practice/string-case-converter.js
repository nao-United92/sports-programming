const toWords = (str) => {
  const matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  return matches ? matches.map(s => s.toLowerCase()) : [];
}

export const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  const words = toWords(str);
  return words.reduce((acc, word, index) => {
    return acc + (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
  }, '');
};

export const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  const words = toWords(str);
  return words.join('_');
};

export const toKebabCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  const words = toWords(str);
  return words.join('-');
};
