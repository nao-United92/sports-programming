/**
 * Parses a URL into its components.
 *
 * @param {string} url The URL to parse.
 * @returns {object|null} An object containing the URL components, or null if the URL is invalid.
 */
export const parseUrl = (url) => {
  try {
    const { href, protocol, hostname, port, pathname, search, hash } = new URL(url);
    const params = Object.fromEntries(new URLSearchParams(search));
    return { href, protocol, hostname, port, pathname, search, hash, params };
  } catch (error) {
    return null;
  }
};