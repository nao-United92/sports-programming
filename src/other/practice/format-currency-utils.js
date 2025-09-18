const formatCurrency = (number, locale = 'en-US', currency = 'USD') => {
  const options = { style: 'currency', currency };
  return new Intl.NumberFormat(locale, options).format(number);
};

module.exports = { formatCurrency };
