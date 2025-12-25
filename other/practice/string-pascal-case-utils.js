const pascalCase = (str) => {
  return str
    .replace(/[\s-_]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '') // Replace spaces/hyphens/underscores with uppercase char
    .replace(/^./, (match) => match.toUpperCase()); // Capitalize first letter
};

module.exports = { pascalCase };