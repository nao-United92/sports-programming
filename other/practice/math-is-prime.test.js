const isPrime = require("./math-is-prime");
test("isPrime checks primality", () => {
  expect(isPrime(7)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(1)).toBe(false);
});