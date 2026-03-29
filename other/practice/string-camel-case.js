const toCamelCase = (str) => str.replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (c) => c.toLowerCase());

export { toCamelCase };
