
/**
 * Parses a URL string into an object.
 *
 * @param {string} url The URL string to parse.
 * @returns {object} A URL object.
 */
export const parseUrl = (url) => {
  const a = document.createElement('a');
  a.href = url;
  return {
    hash: a.hash,
    host: a.host,
    hostname: a.hostname,
    pathname: a.pathname,
    port: a.port,
    protocol: a.protocol,
    search: a.search,
  };
};

/**
 * Stringifies a URL object into a string.
 *
 * @param {object} urlObj The URL object to stringify.
 * @returns {string} The URL string.
 */
export const stringifyUrl = (urlObj) => {
  const { protocol, host, pathname, search, hash } = urlObj;
  return `${protocol}//${host}${pathname}${search}${hash}`;
};
