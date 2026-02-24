export const arrayToCSV = (arr, delimiter = ',') => {
  if (!arr.length) return '';
  const headers = Object.keys(arr[0]).join(delimiter);
  const rows = arr.map(obj => Object.values(obj).join(delimiter)).join('\n');
  return `${headers}\n${rows}`;
};
