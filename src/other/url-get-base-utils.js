export const getBaseUrl = (url) => {
  try {
    const urlObj = new URL(url);
    let baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;
    if (urlObj.port) {
      baseUrl += `:${urlObj.port}`;
    }
    return baseUrl;
  } catch (error) {
    throw new Error(`Invalid URL: ${url}`);
  }
};
