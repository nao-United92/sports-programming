const kebabCase = (str) => {
  if (!str) return '';

  const words = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!words) return '';
  
  return words
    .map(x => x.toLowerCase())
    .join('-');
};

module.exports = { kebabCase };