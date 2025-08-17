/**
 * Parses a URL string into an object.
 *
 * @param {string} url The URL string to parse.
 * @returns {object} The parsed URL object.
 */
export function parseUrl(url) {
  try {
    const urlObject = new URL(url);
    const params = {};
    for (const [key, value] of urlObject.searchParams.entries()) {
      params[key] = value;
    }
    return {
      protocol: urlObject.protocol,
      hostname: urlObject.hostname,
      port: urlObject.port,
      pathname: urlObject.pathname,
      search: urlObject.search,
      hash: urlObject.hash,
      params: params,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Stringifies a URL object into a URL string.
 *
 * @param {object} urlObject The URL object to stringify.
 * @returns {string} The URL string.
 */
export function stringifyUrl(urlObject) {
  const { protocol, hostname, port, pathname, params, hash } = urlObject;
  let url = `${protocol}//${hostname}`;
  if (port) {
    url += `:${port}`;
  }
  if (pathname) {
    url += pathname;
  }
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }
  if (hash) {
    url += hash;
  }
  return url;
}