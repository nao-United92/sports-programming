const camelCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^([A-Z])/, (match) => match.toLowerCase());
};

module.exports = { camelCase };
