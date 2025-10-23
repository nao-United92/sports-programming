export const startsWith = (str, search, position = 0, caseSensitive = true) => {
  if (typeof str !== 'string' || typeof search === 'object' && !Array.isArray(search)) {
    return false;
  }

  const targetStr = caseSensitive ? str : str.toLowerCase();
  const searchArr = Array.isArray(search) ? search : [search];

  for (const prefix of searchArr) {
    if (typeof prefix !== 'string') {
      continue; // Skip non-string prefixes
    }
    const targetPrefix = caseSensitive ? prefix : prefix.toLowerCase();
    if (targetStr.substring(position, position + targetPrefix.length) === targetPrefix) {
      return true;
    }
  }
  return false;
};
