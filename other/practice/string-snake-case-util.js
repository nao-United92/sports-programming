const snakeCase = str => {
  if (str == null) {
    return '';
  }
  const result = String(str)
    // Add space before uppercase letters, but not at the start of the string
    .replace(/([A-Z])/g, ' $1')
    // Replace spaces, hyphens, and underscores with a single underscore
    .replace(/[ _-]+/g, '_')
    // Remove leading underscore if it exists
    .replace(/^_/, '')
    // Convert to lower case
    .toLowerCase();

  return result;
};

module.exports = snakeCase;