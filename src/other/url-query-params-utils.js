export function getQueryParams(url) {
  const params = {};
  const queryString = url.split('?')[1];

  if (queryString) {
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
  }
  return params;
}

export function buildQueryParams(params) {
  if (!params || Object.keys(params).length === 0) {
    return '';
  }

  const queryString = Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === null || value === undefined) {
        return ''; // Skip null or undefined values
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(param => param !== '') // Remove empty strings from skipped values
    .join('&');

  return queryString ? `?${queryString}` : '';
}