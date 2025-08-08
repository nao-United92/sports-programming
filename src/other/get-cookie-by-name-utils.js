/**
 * Gets the decoded value of a cookie by its name.
 *
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The decoded value of the cookie, or null if not found.
 */
export const getCookieByName = (name) => {
  if (typeof document === 'undefined') {
    return null;
  }
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (decodeURIComponent(cookieName) === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};
