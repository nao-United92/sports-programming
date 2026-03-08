/**
 * Calculates the product of values extracted by property from an array of objects.
 * @param {Object[]} arr - Array of objects.
 * @param {string} property - Property to multiply.
 * @returns {number} The product.
 */
export const productByProperty = (arr, property) => {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, obj) => acc * (obj[property] || 1), 1);
};
