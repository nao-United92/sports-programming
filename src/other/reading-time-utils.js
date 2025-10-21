
/**
 * Estimates the reading time for a given text.
 *
 * @param {string} text The text to estimate the reading time for.
 * @param {number} wordsPerMinute The average reading speed in words per minute.
 * @returns {number} The estimated reading time in minutes.
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  if (!text || typeof text !== 'string') {
    return 0;
  }

  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  if (wordCount === 0) {
    return 0;
  }

  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};
