const parseQueryString = (queryString) => {
  if (typeof queryString !== 'string' || !queryString) {
    return {};
  }

  const result = {};
  const pairs = queryString.startsWith('?') ? queryString.substring(1).split('&') : queryString.split('&');

  for (const pair of pairs) {
    const parts = pair.split('=');
    if (parts.length === 2) {
      const key = decodeURIComponent(parts[0]).replace(/\+/g, ' ');
      const value = decodeURIComponent(parts[1]).replace(/\+/g, ' ');
      if (result[key]) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    } else if (parts.length === 1 && parts[0]) {
      const key = decodeURIComponent(parts[0]).replace(/\+/g, ' ');
      result[key] = ''; // Key without value
    }
  }
  return result;
};

export default parseQueryString;
