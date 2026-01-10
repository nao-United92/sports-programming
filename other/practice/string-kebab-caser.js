const kebabCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  if (str.length === 0) {
    return '';
  }

  return str
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
};

module.exports = { kebabCase };
