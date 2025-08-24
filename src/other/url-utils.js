/**
 * Extracts URL parameters from a URL.
 * @param {string} url The URL to extract parameters from.
 * @returns {object} An object containing the URL parameters.
 */
export function getURLParameters(url) {
  const params = {};
  const urlObj = new URL(url);
  for (const [key, value] of urlObj.searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

/**
 * Checks if a string is a valid URL.
 * @param {string} string The string to check.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
export function isURL(string) {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}