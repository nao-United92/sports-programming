const getFileNameFromUrl = (url) => {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string for the URL');
  }
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const parts = pathname.split('/');
    const fileName = parts[parts.length - 1];

    if (fileName === '' || !fileName.includes('.')) {
      return null; // No file name or assumed directory
    }

    return fileName;
  } catch (error) {
    throw new Error(`Invalid URL provided: ${error.message}`);
  }
};

module.exports = { getFileNameFromUrl };
