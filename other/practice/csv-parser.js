export const parseCSV = (csvString, delimiter = ',', hasHeader = false) => {
  if (typeof csvString !== 'string' || csvString.trim() === '') {
    return [];
  }

  const lines = csvString.trim().split('\n');
  if (lines.length === 0) {
    return [];
  }

  const result = [];
  let startIndex = 0;

  if (hasHeader) {
    startIndex = 1;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const row = lines[i].split(delimiter).map(cell => cell.trim());
    result.push(row);
  }

  return result;
};
