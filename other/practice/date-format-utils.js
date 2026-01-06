const formatDate = (date, locale = 'en-US', options = {}) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Input must be a valid Date object.');
  }

  // Default options if none are provided
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const finalOptions = { ...defaultOptions,
    ...options
  };

  let effectiveLocale = locale;
  if (Intl.DateTimeFormat.supportedLocalesOf([locale]).length === 0) {
    console.warn(`Locale '${locale}' is not supported. Falling back to 'en-US'.`);
    effectiveLocale = 'en-US';
  }

  try {
    return new Intl.DateTimeFormat(effectiveLocale, finalOptions).format(date);
  } catch (error) {
    // This catch block would primarily handle issues with options, not locale
    console.warn(`Error formatting date with effective locale '${effectiveLocale}': ${error.message}. Falling back to default options with 'en-US'.`);
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
  }
};

module.exports = formatDate;