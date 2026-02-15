function toPascalCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toUpperCase());
}

module.exports = toPascalCase;
