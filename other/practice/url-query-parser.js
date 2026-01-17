export const parseQueryString = (queryString) => {
  if (typeof queryString !== 'string' || queryString.trim() === '') {
    return {};
  }

  const query = {};
  const cleanedQueryString = queryString.startsWith('?') ? queryString.substring(1) : queryString;

  if (cleanedQueryString === '') {
    return {};
  }

  cleanedQueryString.split('&').forEach(pair => {
    const parts = pair.split('=');
    const key = decodeURIComponent(parts[0]);
    const value = parts.length > 1 ? decodeURIComponent(parts.slice(1).join('=')) : '';
    
    // Handle duplicate keys by converting to array
    if (query[key]) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  });

  return query;
};