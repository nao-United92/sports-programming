const kebabCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }

  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

module.exports = kebabCase;
