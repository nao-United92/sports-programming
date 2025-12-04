export const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str, options = {}) => {
  if (typeof str !== 'string') {
    return '';
  }

  const { length = 30, omission = '...' } = options;

  if (str.length <= length) {
    return str;
  }

  const truncatedLength = length - omission.length;
  if (truncatedLength < 0) {
    // If omission is longer than length, just return omission truncated to length
    return omission.slice(0, length);
  }

  return str.slice(0, truncatedLength) + omission;
};
