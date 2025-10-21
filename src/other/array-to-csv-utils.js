/**
 * 2次元配列をCSV文字列に変換します。
 * @param {any[][]} arr - 変換する2次元配列。
 * @param {string} [delimiter=','] - 区切り文字。
 * @returns {string} CSV文字列。
 */
export const arrayToCsv = (arr, delimiter = ',') => {
  return arr.map(row => {
    return row.map(item => {
      const str = String(item);
      if (str.includes(delimiter) || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }).join(delimiter);
  }).join('\n');
};

