
/**
 * Reloads the current page.
 * @param {boolean} [forceGet=false] If true, forces a reload from the server (bypassing cache).
 */
export function reloadPage(forceGet = false) {
  window.location.reload(forceGet);
}

/**
 * Redirects the browser to a new URL.
 * @param {string} url The URL to redirect to.
 * @param {boolean} [newTab=false] If true, opens the URL in a new tab.
 */
export function redirectTo(url, newTab = false) {
  if (newTab) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

/**
 * Gets the current URL hash fragment (e.g., '#section').
 * @returns {string} The hash fragment, including the '#' symbol, or an empty string if not present.
 */
export function getHash() {
  return window.location.hash;
}

/**
 * Sets the current URL hash fragment.
 * @param {string} hash The hash fragment to set (e.g., 'section' or '#section').
 */
export function setHash(hash) {
  window.location.hash = hash.startsWith('#') ? hash : `#${hash}`;
}

/**
 * Updates query parameters in the current URL without reloading the page.
 * Uses history.pushState to update the URL.
 * @param {object} params An object where keys are parameter names and values are their new values.
 */
export function updateUrlQuery(params) {
  const url = new URL(window.location.href);
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url.searchParams.set(key, params[key]);
    }
  }
  window.history.pushState({}, '', url.toString());
}
