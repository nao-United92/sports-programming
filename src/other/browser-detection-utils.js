
/**
 * Checks if the user is on a mobile device.
 * @returns {boolean} True if on a mobile device, false otherwise.
 */
export function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Checks if the user is on a tablet device.
 * Note: This is often less reliable than mobile detection due to device fragmentation.
 * @returns {boolean} True if on a tablet device, false otherwise.
 */
export function isTablet() {
  return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(p(ixi|ortable)?|htc|nexus 7) browser)/i.test(navigator.userAgent);
}

/**
 * Checks if the user is on a desktop device.
 * @returns {boolean} True if on a desktop device, false otherwise.
 */
export function isDesktop() {
  return !isMobile() && !isTablet();
}

/**
 * Returns the name of the current browser.
 * @returns {string} The name of the browser (e.g., 'Chrome', 'Firefox', 'Safari', 'Edge', 'IE', 'Unknown').
 */
export function getBrowserName() {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';

  if (userAgent.indexOf('Chrome') > -1 && !/Edge|Edg/i.test(userAgent)) {
    browserName = 'Chrome';
  } else if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Firefox';
  } else if (userAgent.indexOf('Safari') > -1 && !/Chrome/i.test(userAgent)) {
    browserName = 'Safari';
  } else if (userAgent.indexOf('Edge') > -1 || userAgent.indexOf('Edg') > -1) {
    browserName = 'Edge';
  } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
    browserName = 'IE';
  }
  return browserName;
}

/**
 * Returns the name of the current operating system.
 * @returns {string} The name of the OS (e.g., 'Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Unknown').
 */
export function getOS() {
  const userAgent = navigator.userAgent;
  let osName = 'Unknown';

  if (/Win/i.test(userAgent)) {
    osName = 'Windows';
  } else if (/Mac/i.test(userAgent)) {
    osName = 'macOS';
  } else if (/Linux/i.test(userAgent)) {
    osName = 'Linux';
  } else if (/Android/i.test(userAgent)) {
    osName = 'Android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    osName = 'iOS';
  }
  return osName;
}
