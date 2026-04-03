/**
 * Generates all primes up to n using the Sieve of Eratosthenes.
 *
 * @param {number} n - The upper limit.
 * @returns {number[]} - An array of primes up to n.
 */
function primeSieve(n) {
  if (n < 2) return [];
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }
  const primes = [];
  for (let p = 2; p <= n; p++) {
    if (isPrime[p]) primes.push(p);
  }
  return primes;
}

module.exports = primeSieve;
