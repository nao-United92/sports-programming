const toCamelCase = (str) => {
  if (typeof str !== "string") {
    throw new Error("Expected a string.");
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
};

module.exports = { toCamelCase };