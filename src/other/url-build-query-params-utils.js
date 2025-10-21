const buildQueryParams = (params) => {
  if (!params || typeof params !== 'object') {
    return '';
  }

  const queryString = Object.keys(params)
    .map(key => {
      const value = params[key];
      if (value === null || value === undefined) {
        return ''; // Skip null or undefined values
      }
      if (Array.isArray(value)) {
        return value.map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`).join('&');
      }
      if (typeof value === 'object') {
        // For nested objects, stringify them or decide on a flattening strategy
        // For simplicity, let's stringify for now, or ignore if not primitive/array
        return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(pair => pair !== '') // Remove empty pairs from null/undefined values
    .join('&');

  return queryString ? `?${queryString}` : '';
};

module.exports = { buildQueryParams };
