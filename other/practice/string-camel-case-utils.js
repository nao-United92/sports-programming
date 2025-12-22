export const camelCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  let s = str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
  return s.charAt(0).toLowerCase() + s.slice(1);
};
