const parseUrl = (url) => {
  try {
    const { protocol, hostname, port, pathname, search, hash } = new URL(url);
    const params = Object.fromEntries(new URLSearchParams(search));
    return { protocol, hostname, port, pathname, search, hash, params };
  } catch (e) {
    return null;
  }
};

const stringifyUrl = (obj) => {
  if (!obj || !obj.protocol || !obj.hostname) {
    return null;
  }
  const { protocol, hostname, port, pathname, params, hash } = obj;
  let url = `${protocol.replace(/:$/, '')}://${hostname}`;
  if (port) url += `:${port}`;
  if (pathname) url += pathname;
  if (params) {
    const search = new URLSearchParams(params).toString();
    if (search) url += `?${search}`;
  }
  if (hash) url += hash;
  return url;
};

module.exports = { parseUrl, stringifyUrl };
