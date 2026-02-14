const parseQueryParams = (url) => {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string for the URL');
  }

  try {
    const urlObj = new URL(url);
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      throw new Error('Only http: and https: protocols are supported');
    }
    const params = {};
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  } catch (error) {
    throw new Error(`Invalid URL provided: ${error.message}`);
  }
};

module.exports = { parseQueryParams };
