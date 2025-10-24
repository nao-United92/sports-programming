

/**
 * Checks if a given string is a valid URL.
 *
 * @param {string} str The string to validate.
 * @returns {boolean} Returns `true` if the string is a valid URL, `false` otherwise.
 */
export const isURL = (str) => {
  if (typeof str !== 'string') {
    return false;
  }

  // Regular expression for URL validation (simplified for common cases)
  // This regex covers http/https, optional www, domain, optional port, path, query, and fragment.
  const urlRegex = new RegExp(
    '^(https?://)?' + // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))' + // domain name
    '(:\d+)?(/[-a-z\d%_.~+]*)*' + // port and path
    '(\?[;&a-z\d%_.~+=-]*)?' + // query string
    '(#[-a-z\d_]*)?$', // fragment locator
    'i'
  );

  return urlRegex.test(str);
};

