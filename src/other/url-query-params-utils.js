const parseQueryParams = (url = window.location.search) => {
  const params = {};
  const queryString = url.startsWith('?') ? url.substring(1) : url;

  if (!queryString) {
    return params;
  }

  queryString.split('&').forEach(pair => {
    let [key, value] = pair.split('=').map(decodeURIComponent);
    if (key) {
      if (params[key]) {
        if (!Array.isArray(params[key])) {
          params[key] = [params[key]];
        }
        params[key].push(value || '');
      } else {
        params[key] = value || '';
      }
    }
  });

  return params;
};

module.exports = { parseQueryParams };