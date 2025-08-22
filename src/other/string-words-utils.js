export const words = (string, pattern) => {
  if (pattern === undefined) {
    // Matches words containing alphanumeric characters.
    const reUnicodeWord = /[a-zA-Z0-9]+/g;
    return string.match(reUnicodeWord) || [];
  } 
  return string.match(pattern) || [];
};
