const decapitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  const [first, ...rest] = str;
  return `${first.toLowerCase()}${rest.join('')}`;
};

export default decapitalize;
