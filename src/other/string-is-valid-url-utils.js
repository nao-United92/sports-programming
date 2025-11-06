/**
 * Checks if a string is a valid URL.
 *
 * @param {string} url The URL string to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export const isValidUrl = (url) => {
  if (typeof url !== 'string') {
    return false;
  }
  // A common regex for URL validation.
  // This regex is a simplified version and might not cover all edge cases
  // but is sufficient for most common URL formats.
  const urlRegex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/i;
  return urlRegex.test(url);
};
