const words = (str) => {
  if (typeof str !== 'string') return [];
  const matches = str.match(/[A-Z]?[a-z]+|[A-Z]+(?=[A-Z][a-z]|\b)|[0-9]+/g);
  return matches || [];
};

export const camelCase = (str) => {
  const ws = words(str).map(w => w.toLowerCase());
  if (ws.length === 0) return '';
  return ws.reduce((acc, word, index) => {
    return acc + (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
  }, '');
};

export const kebabCase = (str) => {
  return words(str).map(w => w.toLowerCase()).join('-');
};

export const snakeCase = (str) => {
  return words(str).map(w => w.toLowerCase()).join('_');
};