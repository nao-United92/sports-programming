const kebabCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
};

module.exports = { kebabCase };
