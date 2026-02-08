const camelCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^./, (str) => str.toLowerCase());

export { camelCase };