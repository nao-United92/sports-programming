/**
 * Converts a string to PascalCase.
 * Example: "foo bar" -> "FooBar", "foo-bar" -> "FooBar", "foo_bar" -> "FooBar"
 *
 * @param {string} str The string to convert.
 * @returns {string} The PascalCased string.
 */
function pascalCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the input.');
  }
  if (str.length === 0) {
    return '';
  }

  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, ' $1') // 非単語文字をスペースに置換し、直後の文字をキャプチャ
    .replace(/([A-Z])/g, ' $1')          // 大文字の前にスペースを挿入 (例: helloWorld -> hello World)
    .split(/\s+/)                       // 複数のスペースで分割
    .map(word => {
      if (word.length === 0) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

export default pascalCase;