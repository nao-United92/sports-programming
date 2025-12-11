const toCamelCase = (str) => {
  if (str == null || str === '') {
    return '';
  }
  // Remove any non-alphanumeric character at the beginning or end
  str = str.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');

  // Replace separators followed by a character with that character capitalized
  return str.replace(/[-_]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '');
};

module.exports = toCamelCase;
