const truncate = (str, length, ending = '...') => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  if (length === null || length === undefined || length < 0) {
    return str;
  }
  if (str.length > length) {
    // Ensure that the ending is always accounted for in the length
    if (length <= ending.length) {
      return ending.substring(0, length) || ''; // Return ending or empty string if length is too small
    }
    return str.slice(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default truncate;