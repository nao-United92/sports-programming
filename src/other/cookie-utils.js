export const getCookie = (name) => {
  if (typeof document === 'undefined' || !document.cookie) {
    return null;
  }
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};

export const setCookie = (name, value, options = {}) => {
  if (typeof document === 'undefined') {
    return;
  }
  let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  if (options.expires) {
    let expires = options.expires;
    if (typeof expires === 'number') {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000); // expires in seconds
      expires = d;
    }
    if (expires instanceof Date) {
      cookieString += '; expires=' + expires.toUTCString();
    }
  }
  if (options.path) {
    cookieString += '; path=' + options.path;
  }
  if (options.domain) {
    cookieString += '; domain=' + options.domain;
  }
  if (options.secure) {
    cookieString += '; secure';
  }
  if (options.samesite) {
    cookieString += '; samesite=' + options.samesite;
  }

  document.cookie = cookieString;
};