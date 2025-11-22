export const toSentenceCase = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  const trimmedStr = str.trim();
  if (trimmedStr.length === 0) {
    return '';
  }
  return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1).toLowerCase();
};
