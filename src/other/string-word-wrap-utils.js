/**
 * 指定された幅で文字列をワードラップします。
 * @param {string} str - ラップする文字列。
 * @param {number} width - 1行の最大幅。
 * @returns {string} ラップされた文字列。
 */
export const wordWrap = (str, width) => {
  if (str === null || str === undefined) {
    return '';
  }
  str = String(str);
  if (str.length <= width) {
    return str;
  }

  const lines = [];
  let line = '';
  const words = str.split(' ');

  for (const word of words) {
    if (line === '') {
      line = word;
    } else if ((line + ' ' + word).length > width) {
      lines.push(line);
      line = word;
    } else {
      line += ' ' + word;
    }
  }
  lines.push(line);

  return lines.join('\n');
};