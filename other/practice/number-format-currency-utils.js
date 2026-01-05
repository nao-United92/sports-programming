/**
 * Formats a number as a currency string using Intl.NumberFormat.
 *
 * @param {number} amount The number to format.
 * @param {string} [currencyCode='USD'] The ISO 4217 currency code (e.g., 'USD', 'EUR', 'JPY').
 * @param {string} [locale='en-US'] The locale string (e.g., 'en-US', 'de-DE', 'ja-JP').
 * @returns {string} The formatted currency string.
 */
const formatCurrency = (amount, currencyCode = 'USD', locale = 'en-US') => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new TypeError('Expected amount to be a number.');
  }
  if (typeof currencyCode !== 'string' || currencyCode.length !== 3) {
    throw new TypeError('Expected currencyCode to be a 3-letter string.');
  }
  if (typeof locale !== 'string') {
    throw new TypeError('Expected locale to be a string.');
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  } catch (error) {
    throw new Error(`Failed to format currency: ${error.message}`);
  }
};

export default formatCurrency;
