/**
 * Checks if the user agent is a mobile device.
 * @returns {boolean} Returns `true` if the user agent is a mobile device, else `false`.
 */
const isMobile = () => {
  if (typeof navigator === 'undefined' || !navigator.userAgent) {
    return false;
  }
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
};

/**
 * Checks if the user agent is a browser.
 * @returns {boolean} Returns `true` if the user agent is a browser, else `false`.
 */
const isBrowser = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  return typeof window !== 'undefined' && typeof window.document !== 'undefined';
};

/**
 * Gets the operating system from the user agent.
 * @returns {string} Returns the operating system.
 */
const getOS = () => {
  if (typeof navigator === 'undefined' || !navigator.userAgent) {
    return 'Unknown';
  }
  const userAgent = navigator.userAgent;
  if (/Windows/i.test(userAgent)) {
    return 'Windows';
  }
  if (/Mac/i.test(userAgent)) {
    return 'macOS';
  }
  if (/Linux/i.test(userAgent)) {
    return 'Linux';
  }
  if (/Android/i.test(userAgent)) {
    return 'Android';
  }
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iOS';
  }
  return 'Unknown';
};

module.exports = { isMobile, isBrowser, getOS };
