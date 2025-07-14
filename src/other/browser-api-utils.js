
/**
 * Checks if the browser is currently online.
 * @returns {boolean} True if the browser is online, false otherwise.
 */
export function isOnline() {
  return navigator.onLine;
}

/**
 * Asynchronously copies a string to the clipboard.
 * @param {string} text The text to copy to the clipboard.
 * @returns {Promise<void>} A promise that resolves when the text has been copied.
 */
export async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    console.error("Clipboard API not available.");
    return Promise.reject("Clipboard API not available.");
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return Promise.reject(err);
  }
}

/**
 * Gets the preferred language of the user's browser.
 * @returns {string} The language code (e.g., "en-US").
 */
export function getBrowserLanguage() {
  return navigator.language || navigator.userLanguage;
}

/**
 * Gets the user's current geolocation.
 * @param {object} [options] - PositionOptions object (e.g., { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }).
 * @returns {Promise<GeolocationPosition>} A promise that resolves with the position object.
 */
export function getGeolocation(options) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by this browser.");
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    }
  });
}

/**
 * Vibrates the device for a specified pattern.
 * @param {number|number[]} pattern - A single value for duration or an array of values for a vibration pattern.
 * @returns {boolean} True if the vibration was successful, false otherwise.
 */
export function vibrate(pattern) {
  if (navigator.vibrate) {
    return navigator.vibrate(pattern);
  }
  console.warn("Vibration API not supported.");
  return false;
}
