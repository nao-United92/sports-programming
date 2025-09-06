
const toWords = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to "camel Case"
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric with space
    .toLowerCase()
    .trim()
    .split(' ');
};

export const camelCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  const words = toWords(str);
  return words.map((word, index) => 
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
};
