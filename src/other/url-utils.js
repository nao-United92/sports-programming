export const getQueryParams = (url) => {
  try {
    const urlObj = new URL(url);
    const params = {};
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  } catch (e) {
    // Handle invalid URL gracefully, e.g., return empty object
    return {};
  }
};

export const addQueryParams = (url, params) => {
  try {
    const urlObj = new URL(url);
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        urlObj.searchParams.set(key, params[key]);
      }
    }
    return urlObj.toString();
  } catch (e) {
    // Handle invalid URL gracefully, e.g., return original url
    return url;
  }
};