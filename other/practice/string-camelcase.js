// Converts a string to camelCase
export const toCamelCase = (string) => {
  if (typeof string !== 'string') return '';
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
