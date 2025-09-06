
export const replaceAll = (str, search, replacement) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split(search).join(replacement);
};
