/**
 * Checks if a given string is an absolute URL.
 *
 * @param {string} url The string to check.
 * @returns {boolean} Returns `true` if `url` is an absolute URL, else `false`.
 */
const isAbsoluteURL = (url) => {
  if (typeof url !== 'string' || url.length === 0) {
    return false;
  }

  // Regular expression to check for absolute URLs
  // This regex matches:
  // 1. A scheme (http, https, ftp, mailto, etc.) followed by ://
  // 2. Or, a data URI (data:)
  // 3. Or, a protocol-relative URL (//)
  // It specifically checks for patterns that indicate an absolute path or full URL.
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
};

export default isAbsoluteURL;