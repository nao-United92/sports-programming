
/**
 * Gets the current screen orientation.
 * @returns {string} 'portrait' or 'landscape'.
 */
export function getScreenOrientation() {
  if (window.screen.orientation) {
    return window.screen.orientation.type.split('-')[0];
  } else if (window.matchMedia) {
    return window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape';
  } else {
    return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
  }
}

/**
 * Checks if the current device is a touch-enabled device.
 * @returns {boolean} True if it's a touch device, false otherwise.
 */
export function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

/**
 * Gets the device's pixel ratio.
 * @returns {number} The device pixel ratio value.
 */
export function getDevicePixelRatio() {
  return window.devicePixelRatio || 1;
}

/**
 * Checks if the user has a preference for reduced motion.
 * @returns {boolean} True if reduced motion is preferred, false otherwise.
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Gets the user's operating system.
 * @returns {string} The name of the OS (e.g., 'Windows', 'Mac OS', 'Linux', 'Android', 'iOS', 'Unknown').
 */
export function getOS() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('Windows NT') !== -1) return 'Windows';
  if (userAgent.indexOf('Mac OS X') !== -1) return 'Mac OS';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  if (userAgent.indexOf('Android') !== -1) return 'Android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
  return 'Unknown';
}
