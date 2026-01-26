const parseQueryString = (queryString) => {
  const params = {};
  if (!queryString || typeof queryString !== 'string') {
    return params;
  }

  // Remove leading '?' if present
  const qs = queryString.startsWith('?') ? queryString.substring(1) : queryString;

  qs.split('&').forEach(pair => {
    const [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || '';
    }
  });
  return params;
};

const stringifyQueryString = (params) => {
  if (typeof params !== 'object' || params === null) {
    return '';
  }

  const queryString = Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === undefined) {
          return ''; // Skip undefined values
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(pair => pair !== '') // Filter out empty strings from undefined values
    .join('&');

  return queryString ? `?${queryString}` : '';
};

module.exports = { parseQueryString, stringifyQueryString };
