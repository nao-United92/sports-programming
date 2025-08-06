
/**
 * Formats a number as currency.
 *
 * @param {number} amount The number to format.
 * @param {string} currency The currency code (e.g., 'USD', 'JPY').
 * @param {string} locale The locale string (e.g., 'en-US', 'ja-JP').
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '';
  }
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return '';
  }
};

/**
 * Formats a number as a percentage.
 *
 * @param {number} value The number to format (e.g., 0.5 for 50%).
 * @param {string} locale The locale string (e.g., 'en-US', 'ja-JP').
 * @param {number} [minimumFractionDigits=0] The minimum number of fraction digits to use.
 * @param {number} [maximumFractionDigits=0] The maximum number of fraction digits to use.
 * @returns {string} The formatted percentage string.
 */
export const formatPercentage = (value, locale = 'en-US', minimumFractionDigits = 0, maximumFractionDigits = 0) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '';
  }
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
    }).format(value);
  } catch (error) {
    console.error('Error formatting percentage:', error);
    return '';
  }
};
