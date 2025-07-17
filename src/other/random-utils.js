
/**
 * Generates a random string of a specified length using a given set of characters.
 * @param {number} length The desired length of the random string.
 * @param {string} [characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters to use for generating the string.
 * @returns {string} The generated random string.
 */
export function generateRandomString(length, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Generates a Universally Unique Identifier (UUID) version 4.
 * @returns {string} A UUID v4 string.
 */
export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Generates a random integer within a specified range (inclusive).
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles the elements of an array randomly (Fisher-Yates algorithm).
 * Creates a shallow copy of the array to avoid modifying the original.
 * @param {Array} array The array to shuffle.
 * @returns {Array} A new, shuffled array.
 */
export function shuffleArray(array) {
  const newArray = [...array]; // Create a shallow copy
  let currentIndex = newArray.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}

/**
 * Generates a random floating-point number within a specified range.
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (exclusive).
 * @returns {number} A random floating-point number between min and max.
 */
export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random hexadecimal color code.
 * @returns {string} A random hex color string (e.g., '#RRGGBB').
 */
export function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
