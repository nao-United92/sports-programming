
export const getUrlQueryParam = (url, param) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(param);
};
