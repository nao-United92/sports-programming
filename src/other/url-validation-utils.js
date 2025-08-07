/**
 * Validates if a given string is a valid URL format.
 * @param {string} url The URL string to validate.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export function isValidUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }
  try {
    const parsedUrl = new URL(url);
    // Additional checks for common invalid patterns not caught by URL constructor
    if (parsedUrl.hostname.includes('..') || parsedUrl.hostname.startsWith('.') || parsedUrl.hostname.endsWith('.')) {
      return false;
    }
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'ftp:';
  } catch (e) {
    return false;
  }
}
