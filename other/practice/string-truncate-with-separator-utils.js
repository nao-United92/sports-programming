const truncateWithSeparator = (str, limit, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  // No truncation needed if string is already shorter than or equal to the limit
  if (str.length <= limit) {
    return str;
  }

  const omissionLength = omission.length;

  // If the limit is too small to even contain the omission itself, just return the omission.
  if (limit <= omissionLength) {
    return omission;
  }

  // Calculate the number of characters we can take from the original string.
  let charsToTake = limit - omissionLength;
  let result = str.substring(0, charsToTake);

  // If the truncation cut a word, find the last space before the cut and truncate there.
  // Check if the character right after `charsToTake` in the original string is not a space,
  // which indicates a word might have been cut.
  if (str.charAt(charsToTake) !== ' ') {
    const lastSpaceIndex = result.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      result = result.substring(0, lastSpaceIndex);
    }
  }

  // Ensure no trailing spaces before adding the omission, unless the omission is just a space itself
  // (which is not expected for '...')
  result = result.trimEnd();

  // Edge case: if after word-boundary adjustment, the result becomes empty,
  // but there was technically space for characters (charsToTake > 0),
  // it implies the very first word was longer than charsToTake.
  // In this case, we hard-truncate at charsToTake.
  if (result.length === 0 && charsToTake > 0) {
    result = str.substring(0, charsToTake).trimEnd();
  }

  return result + omission;
};

export default truncateWithSeparator;