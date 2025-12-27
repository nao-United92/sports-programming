const isEven = (num) => {
  return typeof num === 'number' && Number.isFinite(num) && num % 2 === 0;
};

export default isEven;