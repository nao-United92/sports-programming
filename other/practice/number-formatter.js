export const formatNumber = (num, options = {}) => {
  if (typeof num !== 'number' || isNaN(num)) {
    return '';
  }

  const {
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    locale = undefined, // defaults to runtime's default locale
    currency = undefined, // e.g., 'USD', 'EUR'
    style = 'decimal', // 'decimal', 'currency', 'percent'
    useGrouping = true, // e.g., 1,000,000
  } = options;

  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
      style,
      currency,
      useGrouping,
    }).format(num);
  } catch (error) {
    console.error('Error formatting number:', error);
    return num.toString(); // Fallback to basic string conversion
  }
};
