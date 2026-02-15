function toSnakeCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2') // Add underscore between lower/upper or digit/upper
    .replace(/[^a-zA-Z0-9]+/g, '_') // Replace non-alphanumeric with underscores
    .toLowerCase()
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
}

module.exports = toSnakeCase;
