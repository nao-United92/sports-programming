const words = (str) => {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  str = str.replace(/[_-]/g, ' ');
  return str.toLowerCase().split(' ').filter(Boolean);
};

const camelCase = (str) => {
  const parts = words(str);
  if (parts.length === 0) return '';
  const first = parts[0];
  const rest = parts.slice(1);
  return first + rest.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
};

const kebabCase = (str) => {
  const parts = words(str);
  return parts.join('-');
};

const snakeCase = (str) => {
  const parts = words(str);
  return parts.join('_');
};

module.exports = { camelCase, kebabCase, snakeCase };
