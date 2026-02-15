function decapitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = decapitalize;
