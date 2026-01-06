const truncate = (str, maxLength, ellipsis = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    throw new Error('maxLength must be a non-negative number.');
  }

  if (str.length <= maxLength) {
    return str;
  }

  // Ensure ellipsis length is accounted for
  const effectiveMaxLength = maxLength - ellipsis.length;

  if (effectiveMaxLength < 0) {
    // If maxLength is too small to even fit the ellipsis
    return ellipsis.substring(0, maxLength); // Return truncated ellipsis
  }

  return str.slice(0, effectiveMaxLength) + ellipsis;
};

module.exports = truncate;
