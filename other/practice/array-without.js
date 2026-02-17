const arrayWithout = (arr, ...values) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return arr.filter(item => !values.includes(item));
};

export default arrayWithout;
