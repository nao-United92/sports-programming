export const fibonacci = (n) => {
  if (n < 0) {
    return -1; // Or throw an error
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
