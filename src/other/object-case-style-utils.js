const toCamelCase = (str) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const processKeys = (obj, processer) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => processKeys(v, processer));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (acc, key) => ({
        ...acc,
        [processer(key)]: processKeys(obj[key], processer),
      }),
      {}
    );
  }
  return obj;
};

/**
 * Recursively converts object keys to camelCase.
 * @param {object} obj The object to process.
 * @returns {object} A new object with camelCase keys.
 */
const deepCamelCaseKeys = (obj) => {
  return processKeys(obj, toCamelCase);
};

/**
 * Recursively converts object keys to snake_case.
 * @param {object} obj The object to process.
 * @returns {object} A new object with snake_case keys.
 */
const deepSnakeCaseKeys = (obj) => {
  return processKeys(obj, toSnakeCase);
};

module.exports = { deepCamelCaseKeys, deepSnakeCaseKeys };
