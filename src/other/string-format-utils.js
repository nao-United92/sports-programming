// src/other/string-format-utils.js

/**
 * Formats a number into a currency string.
 *
 * @param {number} amount The number to format.
 * @param {string} currency The currency symbol (e.g., '$', '€', '¥').
 * @param {string} locale The locale to use for formatting (e.g., 'en-US', 'ja-JP').
 * @returns {string} The formatted currency string.
 */
const formatCurrency = (amount, currency = '$', locale = 'en-US') => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency, // This expects an ISO 4217 currency code, but we're using it for symbol here.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

module.exports = {
  formatCurrency,
};