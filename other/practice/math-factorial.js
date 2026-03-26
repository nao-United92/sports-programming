const factorial = (n) => {
  if (n < 0) throw new TypeError('Negative numbers are not allowed');
  return n <= 1 ? 1 : n * factorial(n - 1);
};

export { factorial };
