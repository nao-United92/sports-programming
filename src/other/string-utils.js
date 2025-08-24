/**
 * Generates a random alphanumeric string of a specified length.
 *
 * @param {number} length The desired length of the random string.
 * @returns {string} The generated random string.
 */
export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
