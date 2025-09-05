/**
 * Parses a URL string into its components.
 * This function provides a basic parsing for common URL structures.
 * For more robust and spec-compliant parsing, consider using the native URL API in browser environments.
 *
 * @param {string} urlString The URL string to parse.
 * @returns {{protocol: string, hostname: string, port: string, pathname: string, search: string, hash: string}|null} An object with URL components, or null if the URL is invalid.
 */
export function parseUrl(urlString) {
  if (typeof urlString !== 'string' || urlString.trim() === '') {
    return null;
  }

  try {
    // Use native URL API if available (e.g., in browser or Node.js environment)
    const url = new URL(urlString);
    return {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    };
  } catch (e) {
    // Fallback for environments without native URL API or invalid URLs
    // This is a simplified fallback and might not cover all edge cases.
    const result = {
      protocol: '',
      hostname: '',
      port: '',
      pathname: '',
      search: '',
      hash: '',
    };

    let remaining = urlString;

    // Protocol
    const protocolMatch = remaining.match(/^([a-z]+:)\/\//i);
    if (protocolMatch) {
      result.protocol = protocolMatch[1];
      remaining = remaining.substring(protocolMatch[0].length);
    }

    // Hostname and Port
    const hostMatch = remaining.match(/^([^\/?:#]+)/);
    if (hostMatch) {
      const host = hostMatch[1];
      const portMatch = host.match(/:(\d+)$/);
      if (portMatch) {
        result.port = portMatch[1];
        result.hostname = host.substring(0, host.length - portMatch[0].length);
      } else {
        result.hostname = host;
      }
      remaining = remaining.substring(hostMatch[0].length);
    }

    // Pathname, Search, Hash
    const hashIndex = remaining.indexOf('#');
    if (hashIndex !== -1) {
      result.hash = remaining.substring(hashIndex);
      remaining = remaining.substring(0, hashIndex);
    }

    const searchIndex = remaining.indexOf('?');
    if (searchIndex !== -1) {
      result.search = remaining.substring(searchIndex);
      remaining = remaining.substring(0, searchIndex);
    }

    result.pathname = remaining;

    return result;
  }
}
