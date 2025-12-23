const toKebabCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  if (!match) return ''
  return match
    .map(x => x.toLowerCase())
    .join('-');
};

module.exports = toKebabCase;
