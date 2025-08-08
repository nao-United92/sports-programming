/**
 * Get a URL parameter by name.
 *
 * @param {string} name The name of the parameter to get.
 * @param {string} [url=window.location.href] The URL to parse.
 * @returns {string|null} The value of the parameter or null if not found.
 */
export const getURLParameter = (name, url = window.location.href) => {
  const nameA = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + nameA + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

