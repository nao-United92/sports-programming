const difference = (arr, ...values) => {
  const flatValues = values.flat();
  const set = new Set(flatValues);
  return arr.filter(item => !set.has(item));
};

export default difference;
