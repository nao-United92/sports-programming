const parseQueryString = (queryString) => {
  const params = {};
  const query = queryString.startsWith('?') ? queryString.substring(1) : queryString;
  if (!query) {
    return params;
  }
  query.split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  });
  return params;
};

const stringifyQueryString = (params) => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

module.exports = { parseQueryString, stringifyQueryString };