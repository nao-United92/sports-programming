export const toSnakeCase = (str) => {
  if (str === null || str === undefined) {
    return "";
  }
  const result = String(str)
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase();
  if (result.startsWith("_")) {
    return result.substring(1);
  }
  return result;
};

export const toCamelCase = (str) => {
  if (str === null || str === undefined) {
    return "";
  }
  return String(str).replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

/**
 * Converts a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
export const toKebabCase = (str) => {
  if (str === null || str === undefined) {
    return "";
  }
  return String(str)
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
};
