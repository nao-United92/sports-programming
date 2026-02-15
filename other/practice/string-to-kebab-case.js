function toKebabCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string.');
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2') // Add dash between lower/upper or digit/upper
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace non-alphanumeric with dashes
    .toLowerCase()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

module.exports = toKebabCase;
