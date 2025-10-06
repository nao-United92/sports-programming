
/**
 * Checks if a string is a valid credit card number using the Luhn algorithm.
 *
 * @param {string} cardNumber The credit card number to validate.
 * @returns {boolean} Returns `true` if the credit card number is valid, else `false`.
 */
export const isCreditCard = (cardNumber) => {
  if (typeof cardNumber !== 'string') {
    return false;
  }

  const sanitized = cardNumber.replace(/[^0-9]+/g, '');

  if (sanitized.length < 13 || sanitized.length > 19) {
    return false;
  }

  let sum = 0;
  let doubleUp = false;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i), 10);
    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
};
