const kebabCase = str => {
  if (str == null) {
    return '';
  }
  const result = String(str)
    // Add space before uppercase letters, but not at the start of the string
    .replace(/([A-Z])/g, ' $1')
    // Replace spaces, hyphens, and underscores with a single hyphen
    .replace(/[ _-]+/g, '-')
    // Remove leading hyphen if it exists
    .replace(/^-/, '')
    // Convert to lower case
    .toLowerCase();

  return result;
};

module.exports = kebabCase;