/**
 * Masks a phone number, keeping only the last 4 digits.
 * Example: '1234567890' -> '******7890'
 * @param {string|number} phone
 * @returns {string}
 */
export const maskPhone = (phone) => {
  const str = String(phone);
  if (str.length <= 4) return str;
  return '*'.repeat(str.length - 4) + str.slice(-4);
};
