const camelCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the argument.');
  }

  // Convert the string to lowercase first, then replace non-alphanumeric separators
  // and capitalize the character following them.
  // Finally, ensure the very first character is lowercase.
  return str.toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
            .replace(/^./, (match) => match.toLowerCase());
};

export default camelCase;