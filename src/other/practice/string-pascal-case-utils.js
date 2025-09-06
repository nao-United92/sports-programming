
const toWords = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to "camel Case"
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric with space
    .toLowerCase()
    .trim()
    .split(' ');
};

export const pascalCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return toWords(str).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};
