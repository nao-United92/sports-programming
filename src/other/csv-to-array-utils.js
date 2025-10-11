/**
 * CSV文字列を2次元配列に変換します。
 * @param {string} csvString - 変換するCSV文字列。
 * @param {string} [delimiter=','] - 区切り文字。
 * @returns {string[][]} 変換後の2次元配列。
 */
export const csvToArray = (csvString, delimiter = ',') => {
  const rows = csvString.split('\n');
  return rows.map(row => {
    if (row === '') return [];
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        if (inQuotes && row[i+1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === delimiter && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  });
};