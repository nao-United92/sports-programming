/**
 * 文字列をタイトルケースに変換します。
 * 各単語の最初の文字を大文字にし、残りを小文字にします。
 * @param {string} str - 変換する文字列。
 * @returns {string} タイトルケースに変換された文字列。
 */
export const titleCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase()
    .split(/([-_\s])/g) // Split by delimiters, but keep the delimiters
    .map(word => {
      if (word.match(/[-_\s]/)) { // If it's a delimiter, return as is
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};
