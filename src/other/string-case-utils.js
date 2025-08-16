const toSnakeCase = (str) => {
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

const toCamelCase = (str) => {
  if (str === null || str === undefined) {
    return "";
  }
  return String(str).replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

module.exports = { toSnakeCase, toCamelCase };
