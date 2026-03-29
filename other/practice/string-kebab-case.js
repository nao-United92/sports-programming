const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]+/g, '-').toLowerCase();

export { toKebabCase };
