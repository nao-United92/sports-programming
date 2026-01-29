const capitalize = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
