const flattenDeep = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenDeep(val) : val), []);

export { flattenDeep };
